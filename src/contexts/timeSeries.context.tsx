import {
    type FC,
    type PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import type { TimeSeries, TimeSeriesInterval } from '@market-pulse-app/types/timeSeries.types';
import timeSeriesAPI from '@market-pulse-app/api/timeSeries.api';
import useStocks from '@market-pulse-app/contexts/stocks.context';

export type TimeSeriesState = {
    error: boolean;
    fetching: boolean;
    selectedInterval: TimeSeriesInterval;
    timeSeries?: TimeSeries[];
    getStockTimeSeries: () => void;
    selectInterval: (interval: TimeSeriesInterval) => void;
};

const TimeSeriesContext = createContext<TimeSeriesState | undefined>(undefined);

export const TimeSeriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const { selectedStock } = useStocks();
    const [error, setError] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [timeSeries, setTimeSeries] = useState<TimeSeries[]>();
    const [selectedInterval, setSelectedInterval] = useState<TimeSeriesInterval>('1day');

    const getStockTimeSeries = useCallback(async () => {
        try {
            if (!selectedStock) {
                return;
            }
            setError(false);
            setFetching(true);

            const response = await timeSeriesAPI.getByIntervalAndSymbol({
                symbol: selectedStock.symbol,
                interval: selectedInterval,
            });
            setTimeSeries(response.values);
        } catch (_) {
            setError(true);
        } finally {
            setFetching(false);
        }
    }, [selectedStock, selectedInterval]);

    const selectInterval = useCallback((interval: TimeSeriesInterval) => {
        setSelectedInterval(interval);
    }, []);

    useEffect(() => {
        getStockTimeSeries();
    }, [getStockTimeSeries]);

    const value = useMemo(
        () => ({
            error,
            fetching,
            selectedInterval,
            timeSeries,
            getStockTimeSeries,
            selectInterval,
        }),
        [error, fetching, selectedInterval, timeSeries, getStockTimeSeries, selectInterval],
    );
    return <TimeSeriesContext.Provider value={value}>{children}</TimeSeriesContext.Provider>;
};

const useTimeSeries = (): TimeSeriesState => {
    const context = useContext(TimeSeriesContext);
    if (!context) {
        throw new Error('useTimeSeries must be used within a TimeSeriesProvider');
    }
    return context;
};

export default useTimeSeries;
