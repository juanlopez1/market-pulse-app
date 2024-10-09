import { FlatList, TouchableOpacity } from 'react-native';
import { useMemo, useState } from 'react';
import { Input, Separator, Text, XStack, YStack } from 'tamagui';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';
import type { Stock } from '@market-pulse-app/types/stock.types';
import useStocks from '@market-pulse-app/contexts/stocks.context';

type FilterType = 'symbol' | 'name';

const StocksSearcher = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { error, fetching, stocks, selectStock } = useStocks();
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [focusedFilter, setFocusedFilter] = useState<FilterType>();
    const filteredItems: Stock[] = useMemo(() => {
        if (!stocks) {
            return [];
        }
        if (focusedFilter && (name || symbol)) {
            const filter = focusedFilter === 'name' ? name : symbol;
            return stocks.filter((stock) => stock[focusedFilter].toLowerCase().includes(filter.toLowerCase()));
        }
        return [];
    }, [focusedFilter, name, symbol, stocks]);

    const handleBlur = () => {
        if (!name && !symbol) {
            setFocusedFilter(undefined);
        }
    };

    const handleFocus = (filter: FilterType) => () => {
        setFocusedFilter(filter);
    };

    const handlePressStock = (stock: Stock) => () => {
        setFocusedFilter(undefined);
        selectStock(stock);
        navigation.navigate('StockDetail');
    };

    return (
        <YStack marginBottom={10}>
            <Text fontWeight="bold" color="#d9d9d9" fontSize={24} marginBottom={20} textAlign="center">
                Acciones disponibles
            </Text>
            <XStack gap={10}>
                <YStack flex={1}>
                    <Input
                        id="symbol"
                        placeholder="Buscá por símbolo..."
                        onChangeText={(text) => setSymbol(text)}
                        value={symbol}
                        onFocus={handleFocus('symbol')}
                        onBlur={handleBlur}
                        editable={!fetching && !error}
                        backgroundColor="#282828"
                        borderColor="#747474"
                        color="#df9a3f"
                    />
                </YStack>
                <YStack flex={1}>
                    <Input
                        id="name"
                        placeholder="Buscá por nombre..."
                        onChangeText={(text) => setName(text)}
                        value={name}
                        onFocus={handleFocus('name')}
                        onBlur={handleBlur}
                        editable={!fetching && !error}
                        backgroundColor="#282828"
                        borderColor="#747474"
                        color="#df9a3f"
                    />
                </YStack>
            </XStack>
            {filteredItems?.length > 0 && (
                <FlatList
                    data={filteredItems}
                    keyExtractor={(item) => `${item.symbol}-${item.exchange}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={handlePressStock(item)}>
                            <Text color="#d9d9d9">{focusedFilter === 'name' ? item.name : item.symbol}</Text>
                        </TouchableOpacity>
                    )}
                    style={{
                        position: 'absolute',
                        top: 103,
                        left: 0,
                        right: 0,
                        backgroundColor: '#282828',
                        borderWidth: 1,
                        borderColor: '#d9d9d9',
                        borderRadius: 8,
                        padding: 15,
                        zIndex: 1,
                        maxHeight: 400,
                    }}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    ItemSeparatorComponent={() => <Separator marginVertical={10} borderColor="#2f2f2f" />}
                />
            )}
        </YStack>
    );
};

export default StocksSearcher;
