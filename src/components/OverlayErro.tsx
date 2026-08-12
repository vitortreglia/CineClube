import { styles } from '@/constants/theme';
import { Text, TouchableOpacity, View } from 'react-native';

interface OverlayErro {
    texto: string;
    onFechar: () => void;
}

export default function OverlayErro({ texto, onFechar }: OverlayErro) {
    return (
        <View style={styles.fundoPopUp}>
            <View style={styles.cardPopUp}>
                <Text style={styles.tituloCentralizado}>{texto}</Text>
                <TouchableOpacity style={styles.botaoErro} onPress={onFechar}>
                    <Text style={styles.textoBotao}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
