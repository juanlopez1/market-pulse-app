import { useEffect } from 'react';
import { YStack } from 'tamagui';

import ErrorMessage from '@market-pulse-app/components/ErrorMessage';
import StocksTable from '@market-pulse-app/components/StocksTable';
import useStocks from '@market-pulse-app/contexts/stocks.context';

const StocksTableScreen = () => {
    const { error, getStocks } = useStocks();

    useEffect(() => {
        getStocks();
    }, [getStocks]);

    return (
        <YStack flex={1} backgroundColor="#141414" padding={15}>
            {error ? (
                <ErrorMessage message="Disculpe, no hemos podido obtener la lista de acciones" onRetry={getStocks} />
            ) : (
                <StocksTable />
            )}
        </YStack>
    );
};

export default StocksTableScreen;
