import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';

export default function LayoutRaiz() {
    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="login" />
                <Stack.Screen name="novoClube" />
                <Stack.Screen name="criarClube" />
                <Stack.Screen name="clube/[id]" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="entrarClube" />
            </Stack>
        </AuthProvider>
    );
}
