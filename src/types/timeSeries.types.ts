export type TimeSeriesMeta = {
    symbol: string;
    interval: TimeSeriesInterval;
    currency: string;
    exchange_timezone: string;
    exchange: string;
    mic_code: string;
    type: string;
};

export type TimeSeriesInterval = '1day' | '1week' | '1month'; // NOTE: TwelveData's API only supports: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 8h, 1day, 1week, 1month

export type TimeSeries = {
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
};
