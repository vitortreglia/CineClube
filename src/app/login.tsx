import { styles } from '@/constants/theme';
import { AuthContext } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
    const [popUp, setPopUp] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function fechar() {
        setPopUp(false);
    }

    const { login } = useContext(AuthContext);

    async function entrar() {
        const requisicao = await login(email, senha);
        if (typeof requisicao === 'string') {
            setPopUp(true);
            console.log(requisicao);
        } else if (requisicao === null) {
            router.replace('/(tabs)/home');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tituloCentralizado}>CineClube</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={(novoEmail) => setEmail(novoEmail)}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888"
                secureTextEntry
                value={senha}
                onChangeText={(novaSenha) => setSenha(novaSenha)}
            />

            <TouchableOpacity style={styles.botao} onPress={() => entrar()}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => router.replace('/signup')}
            >
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            {popUp && (
                <View style={styles.fundoPopUp}>
                    <View style={styles.cardPopUp}>
                        <Text style={styles.texto}>Erro.</Text>
                        <TouchableOpacity
                            style={styles.botaoErro}
                            onPress={() => fechar()}
                        >
                            <Text style={styles.textoBotao}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
