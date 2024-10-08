import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';

import RootNavigator from '@market-pulse-app/navigators/Root.navigator';

const tamaguiConfig = createTamagui(config);

const App = () => {
    const [loaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <StatusBar style="dark" backgroundColor="#282828" />
            <RootNavigator />
        </TamaguiProvider>
    );
};

export default App;
