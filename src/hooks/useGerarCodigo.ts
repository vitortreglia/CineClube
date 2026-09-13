import { supabase } from '@/lib/supabase';

export function useGerarCodigo(
    id: number,
    onErro: () => void,
    onCodigoCriado: () => void,
) {
    const gerarCodigo = async () => {
        const { data: codigo } = await supabase.rpc('criar_convite_codigo', {
            p_clube_id: id,
        });
        if (codigo === 'sem_permissao') {
            onErro();
            return 'Usuário não é admin';
        } else if (codigo === 'erro_geracao') {
            onErro();
            return 'Erro ao gerar código';
        } else {
            onCodigoCriado();
            return codigo;
        }
    };
    return { gerarCodigo };
}
