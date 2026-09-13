export interface Comentario {
    ID: number;
    usuarioID: number;
    data: Date;
    ativo: boolean;
    comentario: string;
}
export interface Usuario {
    ID: number;
    nome: string;
    email: string;
    senha: string;
}

export interface Clube {
    ID: number;
    nome: string;
    visibilidade: string;
    papel: string;
    sobre: string;
    criado_em: string;
    criado_por: string;
}

export interface Membro {
    ID: number;
    usuario_id: number;
    nome: string;
    usuario: string;
    avatar_url: string;
    papel: string;
    entrou_em: string;
}

export interface Nota {
    usuarioID: number;
    nota: number;
}

export interface Tema {
    ID: number;
    clubeID: number;
    usuarioID: number;
    tema: string;
    tags: string[];
    filmes: Filme[];
}

export interface Filme {
    ID: number;
    usuarioID: number;
    usuario: string;
    clubeID: number;
    TemaID: number;
    titulo: string;
    imagem: string;
    tags: string[];
    notas: Nota[];
    media: number;
    selecionado: boolean;
    comentarios: Comentario[];
}

export interface Evento {
    ID: number;
    clubeID: number;
    criado_em: string;
    data: string;
    tipo: string;
    informacoes: string;
    status: string;
    titulo: string;
    data_sorteio_tema: string;
    data_sorteio_filme: string;
}
