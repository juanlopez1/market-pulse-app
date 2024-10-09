import { useCallback, useEffect, useState } from 'react';
import { YStack } from 'tamagui';

import ErrorMessage from '@market-pulse-app/components/ErrorMessage';
import StocksTable from '@market-pulse-app/components/StocksTable';
import type { Stock } from '@market-pulse-app/types/stock.types';
import stocksAPI from '@market-pulse-app/api/stocks.api';

const StocksTableScreen = () => {
    const [stocks, setStocks] = useState<Stock[]>();
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    const getAll = useCallback(async () => {
        try {
            setError(false);
            setFetching(true);

            const response = await stocksAPI.getAll();
            setStocks(response.data.splice(0, 10));
        } catch (_) {
            setError(true);
        } finally {
            setFetching(false);
        }
    }, []);

    useEffect(() => {
        getAll();
    }, [getAll]);

    return (
        <YStack flex={1} backgroundColor="#141414" padding={15}>
            {error ? (
                <ErrorMessage message="Disculpe, no hemos podido obtener la lista de acciones" onRetry={getAll} />
            ) : (
                <StocksTable stocks={stocks as Stock[]} loading={fetching} />
            )}
        </YStack>
    );
};

export default StocksTableScreen;
