import { styles } from '@/constants/theme';
import { Clube, Evento } from '@/types';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CardEvento from './CardEvento';

interface SecaoEventosProps {
    eventos: Evento[];
    clube: Clube;
}

export default function SecaoEventos({ eventos, clube }: SecaoEventosProps) {
    const [aguardandoTema, setAguardandoTema] = useState(
        eventos.filter((item) => item.status === 'aguardando_tema'),
    );
    const [aguardandoFilme, setAguardandoFilme] = useState(
        eventos.filter((item) => item.status === 'aguardando_filme'),
    );

    const [isAguardandoTema, setIsAguardandoTema] = useState(
        (aguardandoTema?.length ?? true, false),
    );

    const [isAguardandoFilme, setIsAguardandoFilme] = useState(
        (aguardandoFilme?.length ?? true, false),
    );
    return (
        <View style={styles.block}>
            <View style={styles.viewBlock}>
                <Text style={styles.tituloEsquerda}>Eventos e sorteios</Text>
                <TouchableOpacity style={styles.viewBlockButton}>
                    <Ionicons
                        name="add-circle-outline"
                        size={36}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
            {!isAguardandoTema && clube.papel === 'admin' && (
                <TouchableOpacity style={styles.botaoEvento}>
                    <Text style={styles.textoBotao}>
                        Abrir novo sorteio de tema
                    </Text>
                </TouchableOpacity>
            )}

            <FlatList
                data={aguardandoFilme}
                keyExtractor={(evento) => evento.ID.toString()}
                renderItem={({ item }) => <CardEvento evento={item} />}
            />

            <FlatList
                data={aguardandoTema}
                keyExtractor={(evento) => evento.ID.toString()}
                renderItem={({ item }) => <CardEvento evento={item} />}
            />

            <FlatList
                data={eventos}
                keyExtractor={(evento) => evento.ID.toString()}
                renderItem={({ item }) => <CardEvento evento={item} />}
            />
            <Calendar />
        </View>
    );
}
