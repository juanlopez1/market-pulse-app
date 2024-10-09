import type { FC } from 'react';
import { Text, XStack } from 'tamagui';

type StockDetailRowProps = {
    label: string;
    value?: string;
};

const StockDetailRow: FC<StockDetailRowProps> = ({ label, value }) => (
    <XStack justifyContent="space-between" alignItems="center">
        <Text color="#747474" fontSize={16}>
            {label}
        </Text>
        <Text color="#df9a3f" fontSize={16} textAlign="right">
            {value}
        </Text>
    </XStack>
);

export default StockDetailRow;
