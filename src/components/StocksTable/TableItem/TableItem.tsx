import type { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'tamagui';

import useStocks from '@market-pulse-app/contexts/stocks.context';
import type { Stock } from '@market-pulse-app/types/stock.types';
import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';
import { Container } from '@market-pulse-app/components/StocksTable/TableItem/TableItem.style';

type TableItemProps = {
    stock: Stock;
};

const TableItem: FC<TableItemProps> = ({ stock }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { selectStock } = useStocks();

    const handlePressSymbol = () => {
        selectStock(stock);
        navigation.navigate('StockDetail');
    };

    return (
        <Container>
            <TouchableOpacity style={{ flex: 2.5 }} onPress={handlePressSymbol}>
                <Text textAlign="center" color="$white" textDecorationLine="underline">
                    {stock.symbol}
                </Text>
            </TouchableOpacity>
            <Text flex={6} color="$orange" numberOfLines={3} ellipsizeMode="tail">
                {stock.name}
            </Text>
            <Text flex={2.5} textAlign="center" color="$orange">
                {stock.currency}
            </Text>
            <Text flex={2.5} textAlign="center" color="$orange">
                {stock.type}
            </Text>
        </Container>
    );
};

export default TableItem;
