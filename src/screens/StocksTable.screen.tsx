import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { XStack, Text, View } from 'tamagui';
import { FlashList } from '@shopify/flash-list';

import stocksAPI from '@market-pulse-app/api/stocks.api';
import type { Stock } from '@market-pulse-app/types/stock.types';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const StocksTable = () => {
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

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <XStack gap="$3" justifyContent="space-between">
                <Text fontWeight="bold">Símbolo</Text>
                <Text fontWeight="bold">Nombre</Text>
                <Text fontWeight="bold">Moneda</Text>
                <Text fontWeight="bold">Tipo</Text>
            </XStack>
            <FlashList
                data={stocks}
                renderItem={({ item }) => (
                    <XStack gap="$3" justifyContent="space-between">
                        <Text>{item.symbol}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.currency}</Text>
                        <Text>{item.type}</Text>
                    </XStack>
                )}
                keyExtractor={(item) => `${item.symbol}-${item.exchange}`}
                estimatedItemSize={150000}
            />
        </View>
    );
};

export default StocksTable;
