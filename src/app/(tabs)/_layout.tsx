import Ionicons from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router';
export default function LayoutTabs() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="filmes"
                options={{
                    title: 'Filmes',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="film" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
