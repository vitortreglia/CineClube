// app/clube/[id].tsx
import OverlayMembros from '@/components/OverlayMembros';
import { styles } from '@/constants/theme';
import { useClube } from '@/hooks/useClube';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ClubeHome() {
    const { id } = useLocalSearchParams();
    const { clube, membros } = useClube(Number(id));
    const [mostraUsuarios, setMostraUsuarios] = useState(false);

    return (
        <View style={styles.containerTop}>
            <Text style={[styles.tituloEsquerda, { marginTop: 60 }]}>
                {clube?.nome}
            </Text>
            <TouchableOpacity onPress={() => setMostraUsuarios(true)}>
                <Text style={styles.texto}>{membros?.length} membros</Text>
            </TouchableOpacity>
            {mostraUsuarios && (
                <OverlayMembros
                    membros={membros ?? []}
                    onFechar={() => setMostraUsuarios(false)}
                />
            )}
        </View>
    );
}
