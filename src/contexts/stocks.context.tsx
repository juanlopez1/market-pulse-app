import { type FC, type PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';

import type { Stock } from '@market-pulse-app/types/stock.types';
import stocksAPI from '@market-pulse-app/api/stocks.api';

export type StocksState = {
    error: boolean;
    fetching: boolean;
    selectedStock?: Stock;
    stocks?: Stock[];
    getStocks: () => void;
    selectStock: (stock: Stock) => void;
};

const StocksContext = createContext<StocksState | undefined>(undefined);

export const StocksProvider: FC<PropsWithChildren> = ({ children }) => {
    const [error, setError] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [selectedStock, setSelectedStock] = useState<Stock>();
    const [stocks, setStocks] = useState<Stock[]>();

    const getStocks = useCallback(async () => {
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

    const selectStock = useCallback((stock: Stock) => {
        setSelectedStock(stock);
    }, []);

    const value = useMemo(
        () => ({
            error,
            fetching,
            selectedStock,
            stocks,
            getStocks,
            selectStock,
        }),
        [error, fetching, selectedStock, stocks, getStocks, selectStock],
    );
    return <StocksContext.Provider value={value}>{children}</StocksContext.Provider>;
};

const useStocks = (): StocksState => {
    const context = useContext(StocksContext);
    if (!context) {
        throw new Error('useStocks must be used within a StocksProvider');
    }
    return context;
};

export default useStocks;
