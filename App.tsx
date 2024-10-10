import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider, createTamagui } from '@tamagui/core';

import RootNavigator from '@market-pulse-app/navigators/Root.navigator';
import { StocksProvider } from '@market-pulse-app/contexts/stocks.context';
import { TimeSeriesProvider } from '@market-pulse-app/contexts/timeSeries.context';
import colors from '@market-pulse-app/constants/colors';
import config from '@market-pulse-app/../tamagui.config';

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
            <StocksProvider>
                <TimeSeriesProvider>
                    <StatusBar style="dark" backgroundColor={colors.carbon} />
                    <RootNavigator />
                </TimeSeriesProvider>
            </StocksProvider>
        </TamaguiProvider>
    );
};

export default App;
