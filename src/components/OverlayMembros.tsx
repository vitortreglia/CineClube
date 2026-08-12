// components/OverlayMembros.tsx
import { styles } from '@/constants/theme';
import { Membro } from '@/types';
import Ionicons from '@react-native-vector-icons/ionicons';
import { FlatList, TouchableOpacity, View } from 'react-native';
import CardMembro from './CardMembro';

interface OverlayMembrosProps {
    membros: Membro[];
    onFechar: () => void;
}

export default function OverlayMembros({
    membros,
    onFechar,
}: OverlayMembrosProps) {
    return (
        <View style={styles.viewMembros}>
            <TouchableOpacity style={styles.viewBlockButton} onPress={onFechar}>
                <Ionicons name="chevron-back-outline" size={36} color="#fff" />
            </TouchableOpacity>
            <FlatList
                data={membros}
                keyExtractor={(membro) => membro.ID.toString()}
                horizontal={true}
                renderItem={({ item }) => <CardMembro membro={item} />}
            />
        </View>
    );
}
