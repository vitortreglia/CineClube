import { styles } from '@/constants/theme';
import { useGerarCodigo } from '@/hooks/useGerarCodigo';
import { Clube } from '@/types';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import OverlayCodigo from './OverlayCodigo';
import OverlayErro from './OverlayErro';

interface OverlayAdicionarMembroProps {
    clube: Clube;
    onFechar: () => void;
}

export default function OverlayAdicionarMembro({
    clube,
    onFechar,
}: OverlayAdicionarMembroProps) {
    const [codigo, setCodigo] = useState('none');
    const [overlayCodigo, setOverlayCodigo] = useState(false);
    const [overlayErro, setOverlayErro] = useState(false);

    const { gerarCodigo } = useGerarCodigo(
        clube.ID,
        () => setOverlayErro(true),
        () => setOverlayCodigo(true),
    );
    return (
        <View style={styles.viewMembros}>
            <TouchableOpacity style={styles.viewBlockButton} onPress={onFechar}>
                <Ionicons name="chevron-back-outline" size={36} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.tituloCentralizado}>Adicionar Membro</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={async () => {
                    const resultado = await gerarCodigo();
                    setCodigo(resultado);
                }}
            >
                <Text style={styles.textoBotao}>Gerar código</Text>
            </TouchableOpacity>
            {overlayCodigo && (
                <OverlayCodigo
                    texto={codigo}
                    onFechar={() => setOverlayCodigo(false)}
                />
            )}
            {overlayErro && (
                <OverlayErro
                    texto={codigo}
                    onFechar={() => setOverlayErro(false)}
                />
            )}
        </View>
    );
}
