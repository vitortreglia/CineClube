// app/clube/[id].tsx
import OverlayAdicionarMembro from '@/components/OverlayAdicionarMembro';
import OverlayMembros from '@/components/OverlayMembros';
import SecaoEventos from '@/components/SecaoEventos';
import { styles } from '@/constants/theme';
import { useClube } from '@/hooks/useClube';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ClubeHome() {
    const { id } = useLocalSearchParams();
    const { clube, membros, eventos } = useClube(Number(id));
    const [mostraUsuarios, setMostraUsuarios] = useState(false);
    const [adicionarMembro, setAdicionarMembro] = useState(false);

    return (
        <View style={styles.containerTop}>
            <Text style={[styles.tituloEsquerda, { marginTop: 60 }]}>
                {clube?.nome}
            </Text>
            <TouchableOpacity onPress={() => setMostraUsuarios(true)}>
                <Text style={styles.texto}>{membros?.length} membros</Text>
            </TouchableOpacity>
            <Text style={styles.texto}>{clube?.visibilidade}</Text>
            <Text style={styles.texto}>{clube?.sobre}</Text>

            {clube && <SecaoEventos eventos={eventos ?? []} clube={clube} />}

            {mostraUsuarios && clube && (
                <OverlayMembros
                    membros={membros ?? []}
                    clube={clube}
                    onFechar={() => setMostraUsuarios(false)}
                    onAdicionar={() => setAdicionarMembro(true)}
                />
            )}
            {adicionarMembro && clube && (
                <OverlayAdicionarMembro
                    clube={clube}
                    onFechar={() => setAdicionarMembro(false)}
                />
            )}
        </View>
    );
}
