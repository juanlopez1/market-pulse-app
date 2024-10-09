import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, type NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BriefcaseBusiness } from '@tamagui/lucide-icons';

import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';
import StockDetailScreen from '@market-pulse-app/screens/StockDetail.screen';
import StocksTableScreen from '@market-pulse-app/screens/StocksTable.screen';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

// TODO: move this
const headerStyle = {
    headerStyle: {
        backgroundColor: '#282828',
    },
    headerTintColor: '#d9d9d9',
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
                            headerRight: () => <BriefcaseBusiness color="#d9d9d9" />,
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
