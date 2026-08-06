import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Bem-vindo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d1a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 24,
    },
});
