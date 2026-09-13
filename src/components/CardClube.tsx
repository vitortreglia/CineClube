import { Image, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { styles } from '@/constants/theme';
import { Clube } from '@/types';

interface CardClubeProps {
    clube: Clube;
}

export default function CardClube({ clube }: CardClubeProps) {
    return (
        <View style={styles.cardClube}>
            <Image
                source={require('@/assets/images/placeholder.jpg')}
                style={styles.cardClubeImage}
            />
            <Text style={styles.cardTexto}>{clube.nome}</Text>
            <TouchableOpacity
                style={styles.cardBotao}
                onPress={() => router.push(`/clube/${clube.ID}`)}
            >
                <Text style={styles.textoBotao}>Abrir</Text>
            </TouchableOpacity>
        </View>
    );
}
