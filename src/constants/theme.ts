/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform, StyleSheet } from 'react-native';

export const Colors = {
    light: {
        text: '#000000',
        background: '#ffffff',
        backgroundElement: '#F0F0F3',
        backgroundSelected: '#E0E1E6',
        textSecondary: '#60646C',
    },
    dark: {
        text: '#ffffff',
        background: '#000000',
        backgroundElement: '#212225',
        backgroundSelected: '#2E3135',
        textSecondary: '#B0B4BA',
    },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
    ios: {
        /** iOS `UIFontDescriptorSystemDesignDefault` */
        sans: 'system-ui',
        /** iOS `UIFontDescriptorSystemDesignSerif` */
        serif: 'ui-serif',
        /** iOS `UIFontDescriptorSystemDesignRounded` */
        rounded: 'ui-rounded',
        /** iOS `UIFontDescriptorSystemDesignMonospaced` */
        mono: 'ui-monospace',
    },
    default: {
        sans: 'normal',
        serif: 'serif',
        rounded: 'normal',
        mono: 'monospace',
    },
    web: {
        sans: 'var(--font-display)',
        serif: 'var(--font-serif)',
        rounded: 'var(--font-rounded)',
        mono: 'var(--font-mono)',
    },
});

export const Spacing = {
    half: 2,
    one: 4,
    two: 8,
    three: 16,
    four: 24,
    five: 32,
    six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d1a',
        justifyContent: 'center',
        padding: 32,
    },
    tituloCentralizado: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    tituloEsquerda: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#1a1a2e',
        color: '#fff',
        padding: 14,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    botao: {
        backgroundColor: '#e50914',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    botaoErro: {
        backgroundColor: '#e50914',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        margin: 8,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardPopUp: {
        position: 'absolute',
        top: '40%',
        bottom: '40%',
        left: '5%',
        right: '5%',
        backgroundColor: '#161622',
        justifyContent: 'center',
        borderRadius: 8,
    },
    fundoPopUp: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    texto: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'left',
    },
    block: {
        flex: 1,
        backgroundColor: '#1d1d3d',
        justifyContent: 'center',
        padding: 32,
        alignItems: 'center',
    },
});
