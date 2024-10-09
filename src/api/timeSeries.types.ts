import type { TimeSeries, TimeSeriesInterval, TimeSeriesMeta } from '@market-pulse-app/types/timeSeries.types';

export type GetByIntervalAndSymbolRequest = {
    interval: TimeSeriesInterval;
    symbol: string;
};

export type GetByIntervalAndSymbolResponse = {
    meta: TimeSeriesMeta;
    values: TimeSeries[];
    status: string;
};
