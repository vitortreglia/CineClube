import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';

export default function LayoutRaiz() {
    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </AuthProvider>
    );
}
