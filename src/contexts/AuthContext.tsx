import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';
import { createContext, useState } from 'react';

export interface AuthContextProps {
    usuario: User | null;
    session: Session | null;
    login: (email: string, senha: string) => Promise<string | null>;
    logout: () => Promise<void>;
    signUp: (
        email: string,
        nome: string,
        usuario: string,
        senha: string,
    ) => Promise<string | null>;
}

const AuthContext = createContext<AuthContextProps>({
    usuario: null,
    session: null,
    login: async (email: string, senha: string) => null,
    logout: async () => {},
    signUp: async (
        email: string,
        nome: string,
        usuario: string,
        senha: string,
    ) => null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [usuario, setUsuario] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);

    const login = async (email: string, senha: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        });
        if (error) {
            return error.message;
        } else if (data.user === null && data.session === null) {
            return 'erro';
        } else if (data) {
            setUsuario(data.user);
            setSession(data.session);
        }
        return null;
    };
    const logout = async () => {
        await supabase.auth.signOut();
        setUsuario(null);
        setSession(null);
    };

    const signUp = async (
        email: string,
        nome: string,
        usuario: string,
        senha: string,
    ) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha,
            options: {
                data: {
                    nome,
                    usuario,
                },
            },
        });
        if (error) {
            return error.message;
        } else if (data.user === null && data.session === null) {
            return 'erro';
        } else if (data) {
            setUsuario(data.user);
            setSession(data.session);
        }
        return null;
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                session,
                login,
                logout,
                signUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext };
