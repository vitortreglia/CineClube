import { router } from 'expo-router';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CineClube</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#888"
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888"
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => router.replace('/(tabs)/home')}
            >
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
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
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
