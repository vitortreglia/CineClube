import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from '@/constants/theme';
import { Clube } from '@/types';
import CardClube from './CardClube';
import BotaoNovoClube from './BotaoNovoClube';

interface SecaoClubesProps {
    clubes: Clube[];
}

export default function SecaoClubes({ clubes }: SecaoClubesProps) {
    return (
        <View style={styles.block}>
            <View style={styles.viewBlock}>
                <Text style={styles.tituloEsquerda}>Seus Clubes</Text>
                <TouchableOpacity
                    style={styles.viewBlockButton}
                    onPress={() => router.push('/novoClube')}
                >
                    <Ionicons name="add-circle-outline" size={36} color="#fff" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={clubes}
                keyExtractor={(clube) => clube.ID.toString()}
                horizontal={true}
                renderItem={({ item }) => <CardClube clube={item} />}
                ListFooterComponent={() => <BotaoNovoClube />}
            />
        </View>
    );
}
