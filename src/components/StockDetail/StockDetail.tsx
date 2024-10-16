import { YStack } from 'tamagui';

import StockDetailRow from '@market-pulse-app/components/StockDetail/StockDetailRow';
import useStocks from '@market-pulse-app/contexts/stocks.context';
import { Title } from '@market-pulse-app/components/StockDetail/StockDetail.style';

const StockDetail = () => {
    const { selectedStock } = useStocks();
    return (
        <YStack>
            <Title>Símbolo {selectedStock?.symbol}</Title>
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
