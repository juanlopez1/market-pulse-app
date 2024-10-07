import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StocksTable from '@market-pulse-app/screens/StocksTable.screen';

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Stocks Table" component={StocksTable} />
            </Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
