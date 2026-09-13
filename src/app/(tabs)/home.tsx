import SecaoClubes from '@/components/SecaoClubes';
import { styles } from '@/constants/theme';
import { AuthContext } from '@/contexts/AuthContext';
import { useClubes } from '@/hooks/useClubes';
import { useContext } from 'react';
import { ScrollView, Text } from 'react-native';

export default function Home() {
    const { usuario } = useContext(AuthContext);
    const { clubes } = useClubes();

    return (
        <ScrollView style={styles.containerTop}>
            <Text style={[styles.tituloEsquerda, { marginTop: 60 }]}>
                Bem-vindo, {usuario?.user_metadata.nome}
            </Text>
            <SecaoClubes clubes={clubes ?? []} />
        </ScrollView>
    );
}
