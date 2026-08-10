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
    membros: Usuario[];
    //temas: Temas[];
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
