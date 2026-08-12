// hooks/useClube.ts
import { AuthContext } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Clube, Membro } from '@/types';
import { useFocusEffect } from 'expo-router';
import { useCallback, useContext, useState } from 'react';

export function useClube(id: number) {
    const [clube, setClube] = useState<Clube>();
    const [membros, setMembros] = useState<Membro[]>();
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
            };
            buscar();
        }, []),
    );

    return { clube, membros };
}
