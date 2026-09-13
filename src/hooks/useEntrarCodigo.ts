import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';

export function useEntrarCodigo(codigo: string, onErro: () => void) {
    const entrarCodigo = async () => {
        const { data, error } = await supabase.rpc(
            'aceitar_convite_por_codigo',
            { codigo: codigo },
        );

        if (data === 'sucesso') {
            router.push('/home');
        } else if (data === 'codigo_invalido') {
            onErro();
        } else if (data === 'ja_membro') {
            onErro();
        }
    };

    return { entrarCodigo };
}
