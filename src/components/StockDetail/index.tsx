import { Text, YStack } from 'tamagui';

import useStocks from '@market-pulse-app/contexts/stocks.context';
import StockDetailRow from './StockDetailRow';

const StockDetail = () => {
    const { selectedStock } = useStocks();
    return (
        <YStack>
            <Text fontWeight="bold" color="#d9d9d9" fontSize={20} marginBottom={15} textAlign="center">
                Símbolo - {selectedStock?.symbol}
            </Text>
            <YStack gap={4}>
                <StockDetailRow label="Nombre" value={selectedStock?.name} />
                <StockDetailRow label="Moneda" value={selectedStock?.currency} />
                <StockDetailRow label="Tipo" value={selectedStock?.type} />
                <StockDetailRow label="Bolsa" value={selectedStock?.exchange} />
                <StockDetailRow label="MIC" value={selectedStock?.mic_code} />
                <StockDetailRow label="País" value={selectedStock?.country} />
                <StockDetailRow label="FIGI" value={selectedStock?.figi_code} />
            </YStack>
        </YStack>
    );
};

export default StockDetail;
