import { styles } from '@/constants/theme';
import { Evento } from '@/types';
import { Text, TouchableOpacity, View } from 'react-native';

interface CardEventoProps {
    evento: Evento;
}

export default function CardEvento({ evento }: CardEventoProps) {
    return (
        <View style={styles.cardEvento}>
            {evento?.status === 'aguardando_tema' && (
                <TouchableOpacity style={styles.botaoEvento}>
                    <Text style={styles.textoBotao}>
                        Acompanhe o sorteio de temas
                    </Text>
                </TouchableOpacity>
            )}
            {evento?.status === 'aguardando_filme' && (
                <TouchableOpacity style={styles.botaoEvento}>
                    <Text style={styles.textoBotao}>
                        Acompanhe o sorteio de filmes
                    </Text>
                </TouchableOpacity>
            )}
            {evento?.status === 'avaliacao' && (
                <TouchableOpacity style={styles.botaoEvento}>
                    <Text style={styles.textoBotao}>Avalie</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
