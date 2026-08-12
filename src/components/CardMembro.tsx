import { styles } from '@/constants/theme';
import { Membro } from '@/types';
import { Image, Text, View } from 'react-native';

interface CardMembroProps {
    membro: Membro;
}

export default function CardMembro({ membro }: CardMembroProps) {
    return (
        <View style={styles.cardClube}>
            <Image
                source={require('@/assets/images/placeholder.jpg')}
                style={styles.cardClubeImage}
            />
            <Text style={styles.cardTexto}>{membro.nome}</Text>
            <Text style={styles.cardTexto}>{membro.usuario}</Text>
        </View>
    );
}
