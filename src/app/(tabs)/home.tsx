import { styles } from '@/constants/theme';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { Text, View } from 'react-native';

export default function Home() {
    const { usuario } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.tituloEsquerda}>
                Bem-vindo, {usuario?.user_metadata.nome}
            </Text>
            <View style={styles.block}>
                <Text style={styles.texto}>Bem-vindo</Text>
            </View>
        </View>
    );
}
