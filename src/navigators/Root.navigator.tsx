import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, type NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BriefcaseBusiness } from '@tamagui/lucide-icons';

import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';
import StockDetailScreen from '@market-pulse-app/screens/StockDetail/StockDetail.screen';
import StocksTableScreen from '@market-pulse-app/screens/StocksTable/StocksTable.screen';
import colors from '@market-pulse-app/constants/colors';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const headerStyle = {
    headerStyle: {
        backgroundColor: colors.carbon,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="StocksTable"
                    component={StocksTableScreen}
                    options={
                        {
                            title: 'Market Pulse',
                            headerRight: () => <BriefcaseBusiness color="$white" />,
                            ...headerStyle,
                        } as NativeStackNavigationOptions
                    }
                />
                <Screen
                    name="StockDetail"
                    component={StockDetailScreen}
                    options={{ title: 'Detalles de la acción', ...headerStyle } as NativeStackNavigationOptions}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
