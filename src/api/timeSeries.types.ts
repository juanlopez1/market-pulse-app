import type { TimeSeries, TimeSeriesMeta } from '@market-pulse-app/types/timeSeries.types';

export type GetByIntervalAndSymbolRequest = {
    interval: '1day' | '1week' | '1month'; // NOTE: TwelveData's API only supports: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 8h, 1day, 1week, 1month
    symbol: string;
};

export type GetByIntervalAndSymbolResponse = {
    meta: TimeSeriesMeta;
    values: TimeSeries[];
    status: string;
};
