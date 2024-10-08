import { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { Text, XStack, YStack } from 'tamagui';
import { LineChart } from 'react-native-chart-kit';
import { type RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';
import { foo } from '@market-pulse-app/api/stocks.api';
import formatLineChartData from '@market-pulse-app/utils/formatLineChartData';

const screenWidth = Dimensions.get('window').width;

const StockDetailScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList>>();
    // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    const [bar, setBar] = useState(formatLineChartData(foo.values));

    const getDetailsBySymbol = useCallback(async () => {
        try {
            // const response = await stocksAPI.getDetailsBySymbol({ symbol: 'TSLA' });
            return foo;
        } catch (_) {
            // error
        }
    }, []);

    useEffect(() => {
        getDetailsBySymbol();
    }, [getDetailsBySymbol]);

    useEffect(() => {
        if (route.params?.symbol) {
            navigation.setOptions({
                title: route.params?.symbol ? `Símbolo ${route.params?.symbol}` : 'Detalles de la acción',
            });
        }
    }, [navigation, route.params?.symbol]);

    return (
        <YStack flex={1} backgroundColor="#141414" padding={15}>
            <Text fontWeight="bold" color="#747474" fontSize={20} marginBottom={15}>
                Detalles de la acción
            </Text>
            <YStack gap={4} marginBottom={15}>
                <XStack justifyContent="space-between">
                    <Text color="#d9d9d9" fontSize={16}>
                        Bolsa de valores
                    </Text>
                    <Text color="#df9a3f" fontSize={16}>
                        {foo.meta.exchange}
                    </Text>
                </XStack>
                <XStack justifyContent="space-between">
                    <Text color="#d9d9d9" fontSize={16}>
                        Moneda
                    </Text>
                    <Text color="#df9a3f" fontSize={16}>
                        {foo.meta.currency}
                    </Text>
                </XStack>
                <XStack justifyContent="space-between">
                    <Text color="#d9d9d9" fontSize={16}>
                        Código MIC
                    </Text>
                    <Text color="#df9a3f" fontSize={16}>
                        {foo.meta.mic_code}
                    </Text>
                </XStack>
                <XStack justifyContent="space-between">
                    <Text color="#d9d9d9" fontSize={16}>
                        Tipo de acción
                    </Text>
                    <Text color="#df9a3f" fontSize={16}>
                        {foo.meta.type}
                    </Text>
                </XStack>
            </YStack>
            <LineChart
                data={{ ...bar }}
                width={screenWidth}
                height={400}
                chartConfig={{
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    color: () => '#767676',
                    strokeWidth: 2,
                    barPercentage: 0.5,
                }}
            />
        </YStack>
    );
};

export default StockDetailScreen;
