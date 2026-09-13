import { Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from '@/constants/theme';

export default function BotaoNovoClube() {
    return (
        <TouchableOpacity
            style={styles.cardNovoClube}
            onPress={() => router.push('/novoClube')}
        >
            <Ionicons name="add-circle-outline" size={48} color="#ccc" />
            <Text style={styles.textoNovoClube}>Novo clube</Text>
        </TouchableOpacity>
    );
}
