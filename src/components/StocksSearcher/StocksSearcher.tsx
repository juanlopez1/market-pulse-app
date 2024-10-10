import { TouchableOpacity } from 'react-native';
import { useMemo, useState } from 'react';
import { XStack, YStack } from 'tamagui';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';
import type { Stock } from '@market-pulse-app/types/stock.types';
import useStocks from '@market-pulse-app/contexts/stocks.context';
import {
    FilterInput,
    ItemsList,
    ItemName,
    ListSeparator,
    Title,
} from '@market-pulse-app/components/StocksSearcher/StocksSearcher.style';

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
            <Title>Acciones disponibles</Title>
            <XStack gap={10}>
                <YStack flex={1}>
                    <FilterInput
                        id="symbol"
                        placeholder="Buscá por símbolo..."
                        onChangeText={(text) => setSymbol(text)}
                        value={symbol}
                        onFocus={handleFocus('symbol')}
                        onBlur={handleBlur}
                        editable={!fetching && !error}
                    />
                </YStack>
                <YStack flex={1}>
                    <FilterInput
                        id="name"
                        placeholder="Buscá por nombre..."
                        onChangeText={(text) => setName(text)}
                        value={name}
                        onFocus={handleFocus('name')}
                        onBlur={handleBlur}
                        editable={!fetching && !error}
                    />
                </YStack>
            </XStack>
            {filteredItems?.length > 0 && (
                <ItemsList
                    data={filteredItems}
                    keyExtractor={(item) => `${item.symbol}-${item.exchange}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={handlePressStock(item)}>
                            <ItemName>{focusedFilter === 'name' ? item.name : item.symbol}</ItemName>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => <ListSeparator />}
                />
            )}
        </YStack>
    );
};

export default StocksSearcher;
