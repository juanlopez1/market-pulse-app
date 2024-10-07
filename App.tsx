import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';
import { Button } from 'tamagui';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const tamaguiConfig = createTamagui(config);

export default function App() {
    const [loaded, error] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <View style={styles.container}>
                <Text>App.tsx</Text>
                <StatusBar style="auto" />
                <Button theme="blue">Hello world</Button>
            </View>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
