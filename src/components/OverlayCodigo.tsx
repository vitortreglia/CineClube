import { styles } from '@/constants/theme';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface OverlayCodigo {
    texto: string;
    onFechar: () => void;
}

export default function OverlayCodigo({ texto, onFechar }: OverlayCodigo) {
    const [copiado, setCopiado] = useState(false);

    return (
        <View style={styles.fundoPopUp}>
            <View style={styles.cardPopUp}>
                <TouchableOpacity
                    onPress={async () => {
                        await Clipboard.setStringAsync(texto);
                        setCopiado(true);
                        setTimeout(() => setCopiado(false), 2000);
                    }}
                >
                    <Text style={styles.texto}>{texto}</Text>
                    <Text style={styles.texto}>
                        {copiado ? 'Copiado!' : 'Toque para copiar'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoErro} onPress={onFechar}>
                    <Text style={styles.textoBotao}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
