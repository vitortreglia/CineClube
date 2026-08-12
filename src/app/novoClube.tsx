import { styles } from '@/constants/theme';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NovoClube() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => router.push('/criarClube')}
            >
                <Text style={styles.textoBotao}>Criar novo clube</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => router.push('/criarClube')}
            >
                <Text style={styles.textoBotao}>Entrar em clube existente</Text>
            </TouchableOpacity>
        </View>
    );
}
