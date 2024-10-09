import { type FC, type PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';

import type { Stock } from '@market-pulse-app/types/stock.types';
import type { TimeSeries } from '@market-pulse-app/types/timeSeries.types';
import stocksAPI from '@market-pulse-app/api/stocks.api';
import timeSeriesAPI from '@market-pulse-app/api/timeSeries.api';

export type StocksState = {
    error: boolean;
    fetching: boolean;
    selectedStock?: Stock;
    stocks?: Stock[];
    timeSeries?: TimeSeries[];
    getStockTimeSeries: () => void;
    getStocks: () => void;
    selectStock: (stock: Stock) => void;
};

const StocksContext = createContext<StocksState | undefined>(undefined);

export const StocksProvider: FC<PropsWithChildren> = ({ children }) => {
    const [error, setError] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [selectedStock, setSelectedStock] = useState<Stock>();
    const [stocks, setStocks] = useState<Stock[]>();
    const [timeSeries, setTimeSeries] = useState<TimeSeries[]>();

    const getStockTimeSeries = useCallback(async () => {
        try {
            if (!selectedStock) {
                return;
            }
            setError(false);
            setFetching(true);

            const response = await timeSeriesAPI.getByIntervalAndSymbol({
                symbol: selectedStock.symbol,
                interval: '1day',
            });
            setTimeSeries(response.values);
        } catch (_) {
            setError(true);
        } finally {
            setFetching(false);
        }
    }, [selectedStock]);

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
            timeSeries,
            getStockTimeSeries,
            getStocks,
            selectStock,
        }),
        [error, fetching, selectedStock, stocks, timeSeries, getStockTimeSeries, getStocks, selectStock],
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
