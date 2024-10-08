import { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { XStack, Text, View, YStack } from 'tamagui';
import { FlashList } from '@shopify/flash-list';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import type { Stock } from '@market-pulse-app/types/stock.types';
import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';
import stocksAPI from '@market-pulse-app/api/stocks.api';

// TODO: move this
const ItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: '#2f2f2f' }} />;
};

const StocksTableScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [stocks, setStocks] = useState<Stock[]>();

    const getAll = useCallback(async () => {
        try {
            const response = await stocksAPI.getAll();
            setStocks(response.data);
        } catch (_) {
            // error
        }
    }, []);

    useEffect(() => {
        getAll();
    }, [getAll]);

    const handlePressSymbol = (symbol: string) => () => {
        navigation.navigate('StockDetail', { symbol });
    };

    return (
        <YStack flex={1} backgroundColor="#141414" padding={15}>
            <XStack paddingVertical={20} alignItems="center">
                <Text flex={2.5} textAlign="center" fontSize={16} color="#747474">
                    Símbolo
                </Text>
                <Text flex={6} textAlign="center" fontSize={16} color="#747474">
                    Nombre
                </Text>
                <Text flex={2.5} textAlign="center" fontSize={16} color="#747474">
                    Moneda
                </Text>
                <Text flex={2.5} textAlign="center" fontSize={16} color="#747474">
                    Tipo
                </Text>
            </XStack>
            <ItemSeparator />
            <FlashList
                data={stocks}
                renderItem={({ item }) => (
                    <XStack height={100} alignItems="center">
                        <TouchableOpacity style={{ flex: 2.5 }} onPress={handlePressSymbol(item.symbol)}>
                            <Text textAlign="center" color="#d9d9d9" textDecorationLine="underline">
                                {item.symbol}
                            </Text>
                        </TouchableOpacity>
                        <Text flex={6} color="#df9a3f">
                            {item.name}
                        </Text>
                        <Text flex={2.5} textAlign="center" color="#df9a3f">
                            {item.currency}
                        </Text>
                        <Text flex={2.5} textAlign="center" color="#df9a3f">
                            {item.type}
                        </Text>
                    </XStack>
                )}
                keyExtractor={(item) => `${item.symbol}-${item.exchange}`}
                estimatedItemSize={150000}
                ItemSeparatorComponent={ItemSeparator}
            />
        </YStack>
    );
};

export default StocksTableScreen;
