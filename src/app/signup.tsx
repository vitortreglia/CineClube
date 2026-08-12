import OverlayErro from '@/components/OverlayErro';
import { styles } from '@/constants/theme';
import { AuthContext } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
    const [popUp, setPopUp] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signUp } = useContext(AuthContext);

    async function cadastrar() {
        try {
            const requisicao = await signUp(email, nome, usuario, senha);
            if (typeof requisicao === 'string') {
                setPopUp(true);
            } else if (requisicao === null) {
                router.replace('/(tabs)/home');
            }
        } catch (erro) {
            console.log('Erro:', erro);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tituloCentralizado}>CineClube</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor="#888"
                value={usuario}
                onChangeText={(novoUsuario) => setUsuario(novoUsuario)}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#888"
                value={nome}
                onChangeText={(novoNome) => setNome(novoNome)}
            />

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

            <TouchableOpacity style={styles.botao} onPress={() => cadastrar()}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            {popUp && (
                <OverlayErro
                    texto={'E-mail inválido/já utilizado'}
                    onFechar={() => setPopUp(false)}
                />
            )}
        </View>
    );
}
