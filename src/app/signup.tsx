import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Login() {
    const [popUp, setPopUp] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function fechar() {
        setPopUp(false);
    }

    const signUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha,
            options: {
                data: {
                    nome: nome,
                    usuario: usuario,
                },
            },
        });
        if (error) {
            setPopUp(true);
        } else {
            router.replace('/(tabs)/home');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CineClube</Text>

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

            <TouchableOpacity style={styles.botao} onPress={() => signUp()}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            {popUp && (
                <View style={styles.fundoPopUp}>
                    <View style={styles.cardPopUp}>
                        <Text style={styles.titulo}>
                            E-mail inválido/já usado!
                        </Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d1a',
        justifyContent: 'center',
        padding: 32,
    },
    titulo: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#1a1a2e',
        color: '#fff',
        padding: 14,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    botao: {
        backgroundColor: '#e50914',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    botaoErro: {
        backgroundColor: '#e50914',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        margin: 8,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardPopUp: {
        position: 'absolute',
        top: '40%',
        bottom: '40%',
        left: '5%',
        right: '5%',
        backgroundColor: '#161622',
        justifyContent: 'center',
        borderRadius: 8,
    },
    fundoPopUp: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
