import OverlayErro from '@/components/OverlayErro';
import { styles } from '@/constants/theme';
import { useEntrarCodigo } from '@/hooks/useEntrarCodigo';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EntrarClube() {
    const [codigo, setCodigo] = useState<string>('Vazio');
    const [erro, setErro] = useState(false);
    const { entrarCodigo } = useEntrarCodigo(codigo, () => setErro(true));

    return (
        <View style={styles.container}>
            <Text style={styles.tituloEsquerda}>Insira o código</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira o código"
                placeholderTextColor="#888"
                value={codigo}
                onChangeText={(novoCodigo) => setCodigo(novoCodigo)}
            />
            <TouchableOpacity style={styles.botao} onPress={entrarCodigo}>
                <Text style={styles.textoBotao}>Criar</Text>
            </TouchableOpacity>
            {erro && (
                <OverlayErro texto="erro" onFechar={() => setErro(false)} />
            )}
        </View>
    );
}
