import { AuthContext } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Clube } from '@/types';
import { router } from 'expo-router';
import { useContext } from 'react';

export function useCriarClube(
    onErroServidor: () => void,
    onErroNome: () => void,
    clube: Clube,
) {
    const { usuario } = useContext(AuthContext);

    const criar = async () => {
        if (clube.nome !== '') {
            try {
                const { data: criado, error } = await supabase
                    .from('clubes')
                    .insert({
                        nome: clube.nome,
                        criado_por: usuario?.id,
                        visibilidade: clube.visibilidade,
                        sobre: clube.sobre,
                    })
                    .select()
                    .single();
                console.log('erro:', error);
                console.log('criado:', criado);

                if (error) {
                    onErroServidor();
                    return;
                }
                if (criado.id != null) {
                    const { data, error } = await supabase
                        .from('membros')
                        .insert({
                            clube_id: criado.id,
                            usuario_id: usuario?.id,
                            papel: 'admin',
                        });
                    router.replace('/(tabs)/home');
                }
            } catch (erro) {
                onErroServidor();
                console.log(erro);
            }
        } else {
            onErroNome();
        }
    };
    return { criar };
}
