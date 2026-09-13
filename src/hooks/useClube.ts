// hooks/useClube.ts
import { AuthContext } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Clube, Evento, Membro } from '@/types';
import { useFocusEffect } from 'expo-router';
import { useCallback, useContext, useState } from 'react';

export function useClube(id: number) {
    const [clube, setClube] = useState<Clube>();
    const [membros, setMembros] = useState<Membro[]>();
    const [eventos, setEventos] = useState<Evento[]>();
    const { usuario } = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            const buscar = async () => {
                const { data: info } = await supabase
                    .from('membros')
                    .select(
                        'papel, clubes(id, nome, visibilidade, sobre, criado_em, criado_por)',
                    )
                    .eq('clube_id', id)
                    .eq('usuario_id', usuario?.id)
                    .single();

                const data: any = info;

                setClube({
                    ID: data?.clubes?.id,
                    nome: data?.clubes?.nome,
                    visibilidade: data?.clubes?.visibilidade,
                    papel: data?.papel,
                    sobre: data?.clubes?.sobre,
                    criado_em: data?.clubes?.criado_em,
                    criado_por: data?.clubes?.criado_por,
                });

                const { data: reqMembros } = await supabase
                    .from('membros')
                    .select(
                        'id, usuario_id, papel, entrou_em, perfis!membros_perfis_fk(nome, avatar_url, usuario)',
                    )
                    .eq('clube_id', id);
                console.log(reqMembros);
                const resultado = reqMembros?.map((item: any) => ({
                    ID: item.id,
                    usuario_id: item.usuario_id,
                    nome: item.perfis?.nome ?? 'Sem Nome',
                    usuario: item.perfis?.usuario ?? '',
                    avatar_url: item.perfis?.avatar_url ?? '',
                    papel: item.papel,
                    entrou_em: item.entrou_em,
                }));
                setMembros(resultado);

                const { data: reqEventos } = await supabase
                    .from('eventos')
                    .select(
                        'id, clube_id, criado_em, data, tipo, informacoes, status, titulo, data_sorteio_tema, data_sorteio_filme',
                    )
                    .eq('clube_id', id);

                const dataEventos = reqEventos?.map((item: any) => ({
                    ID: item.id,
                    clubeID: item.clube_id,
                    criado_em: item.criado_em,
                    data: item.data,
                    tipo: item.tipo,
                    informacoes: item.informacoes,
                    status: item.status,
                    titulo: item.titulo,
                    data_sorteio_tema: item.data_sorteio_tema,
                    data_sorteio_filme: item.data_sorteio_filme,
                }));
                setEventos(dataEventos);
            };
            buscar();
        }, []),
    );

    return { clube, membros, eventos };
}
