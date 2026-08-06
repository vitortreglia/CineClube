import { Stack } from 'expo-router';

export default function LayoutRaiz() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}
