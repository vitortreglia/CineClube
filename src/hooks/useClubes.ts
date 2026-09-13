import { useCallback, useContext, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { AuthContext } from '@/contexts/AuthContext';
import { Clube } from '@/types';

export function useClubes() {
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

    return { clubes };
}
