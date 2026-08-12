import { styles } from '@/constants/theme';
import { AuthContext } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Clube } from '@/types';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useContext, useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Home() {
    const [clubes, setClubes] = useState<Clube[]>();
    const { usuario } = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            const getClubes = async () => {
                const { data } = await supabase
                    .from('membros')
                    .select(
                        'papel, clubes(id, nome, visibilidade, sobre, criado_em, criado_por)',
                    )
                    .eq('usuario_id', usuario?.id);
                const resultado = data?.map((item: any) => ({
                    ID: item.clubes.id,
                    nome: item.clubes.nome,
                    visibilidade: item.clubes.visibilidade,
                    papel: item.papel,
                    sobre: item.clubes.sobre,
                    criado_em: item.clubes.criado_em,
                    criado_por: item.clubes.criado_por,
                }));
                setClubes(resultado);
            };
            getClubes();
        }, []),
    );
    return (
        <ScrollView style={styles.containerTop}>
            <Text style={[styles.tituloEsquerda, { marginTop: 60 }]}>
                Bem-vindo, {usuario?.user_metadata.nome}
            </Text>

            <View style={styles.block}>
                <View style={styles.viewBlock}>
                    <Text style={styles.tituloEsquerda}>Seus Clubes</Text>
                    <TouchableOpacity
                        style={styles.viewBlockButton}
                        onPress={() => router.push('/novoClube')}
                    >
                        <Ionicons
                            name="add-circle-outline"
                            size={36}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={clubes}
                    keyExtractor={(clube) => clube.ID.toString()}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardClube}>
                            <Image
                                source={require('@/assets/images/placeholder.jpg')}
                                style={styles.cardClubeImage}
                            />
                            <Text style={styles.cardTexto}>{item.nome}</Text>
                            <TouchableOpacity
                                style={styles.cardBotao}
                                onPress={() => router.push(`/clube/${item.ID}`)}
                            >
                                <Text style={styles.textoBotao}>Abrir</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    ListFooterComponent={() => (
                        <TouchableOpacity
                            style={styles.cardNovoClube}
                            onPress={() => router.push('/novoClube')}
                        >
                            <Ionicons
                                name="add-circle-outline"
                                size={48}
                                color="#ccc"
                            />
                            <Text style={styles.textoNovoClube}>
                                Novo clube
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.block}>
                <View style={styles.viewBlock}>
                    <Text style={styles.tituloEsquerda}>Eventos</Text>
                    <TouchableOpacity style={styles.viewBlockButton}>
                        <Ionicons
                            name="add-circle-outline"
                            size={36}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                <Calendar />
            </View>
        </ScrollView>
    );
}
