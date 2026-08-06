export interface Comentario {
    id: number;
    userID: number;
    date: Date;
    active: boolean;
}
export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

export interface Clube {
    id: number;
    nome: string;
    membros: Usuario[];
    temas: Temas[];
}

export interface Nota {
    userID: number;
    nota: number;
}

export interface Filme {
    id: number;
    userID: number;
    titulo: string;
    poster: string;
    nota: Nota[];
    media: number;
}
