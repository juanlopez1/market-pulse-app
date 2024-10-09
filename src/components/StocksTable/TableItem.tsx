import type { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { XStack, Text } from 'tamagui';

import type { Stock } from '@market-pulse-app/types/stock.types';
import type { RootStackParamList } from '@market-pulse-app/navigators/root.types';

type TableItemProps = {
    stock: Stock;
};

const TableItem: FC<TableItemProps> = ({ stock }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handlePressSymbol = () => {
        navigation.navigate('StockDetail', { symbol: stock.symbol });
    };

    return (
        <XStack height={100} alignItems="center">
            <TouchableOpacity style={{ flex: 2.5 }} onPress={handlePressSymbol}>
                <Text textAlign="center" color="#d9d9d9" textDecorationLine="underline">
                    {stock.symbol}
                </Text>
            </TouchableOpacity>
            <Text flex={6} color="#df9a3f">
                {stock.name}
            </Text>
            <Text flex={2.5} textAlign="center" color="#df9a3f">
                {stock.currency}
            </Text>
            <Text flex={2.5} textAlign="center" color="#df9a3f">
                {stock.type}
            </Text>
        </XStack>
    );
};

export default TableItem;
