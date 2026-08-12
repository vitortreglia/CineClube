import OverlayErro from '@/components/OverlayErro';
import { styles } from '@/constants/theme';
import { AuthContext } from '@/contexts/AuthContext';
import { useCriarClube } from '@/hooks/useCriarClube';
import { Clube } from '@/types';
import { useContext, useState } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CriarClube() {
    const [erroNome, setErroNome] = useState(false);
    const [erroServidor, setErroServidor] = useState(false);
    const [clube, setClube] = useState<Clube>({
        ID: 0,
        nome: '',
        visibilidade: 'privado',
        papel: '',
        sobre: '',
        criado_em: '',
        criado_por: '',
    });

    const { usuario } = useContext(AuthContext);

    const { criar } = useCriarClube(
        () => setErroServidor(true),
        () => setErroNome(true),
        clube,
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.tituloEsquerda, { marginTop: 30 }]}>
                Criar novo clube
            </Text>
            <View style={styles.criarBlock}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do clube"
                    placeholderTextColor="#888"
                    value={clube?.nome}
                    onChangeText={(novoNome) =>
                        setClube({ ...clube, nome: novoNome })
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sobre o clube"
                    placeholderTextColor="#888"
                    multiline={true}
                    numberOfLines={4}
                    value={clube?.sobre}
                    onChangeText={(novoSobre) =>
                        setClube({ ...clube, sobre: novoSobre })
                    }
                />
                <View style={[styles.viewBlock, { marginBottom: 30 }]}>
                    <Text style={[styles.texto, { marginTop: 10 }]}>
                        Grupo público
                    </Text>
                    <Switch
                        value={clube.visibilidade === 'publico'}
                        onValueChange={(valor) =>
                            setClube({
                                ...clube,
                                visibilidade: valor ? 'publico' : 'privado',
                            })
                        }
                    />
                </View>
                <TouchableOpacity style={styles.botao} onPress={criar}>
                    <Text style={styles.textoBotao}>Criar</Text>
                </TouchableOpacity>
            </View>
            {erroNome && (
                <OverlayErro
                    texto={'Insira um nome'}
                    onFechar={() => setErroNome(false)}
                />
            )}
            {erroServidor && (
                <OverlayErro
                    texto={'Erro no servidor'}
                    onFechar={() => setErroServidor(false)}
                />
            )}
        </View>
    );
}
