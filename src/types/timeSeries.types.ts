export type TimeSeriesMeta = {
    symbol: string;
    interval: string;
    currency: string;
    exchange_timezone: string;
    exchange: string;
    mic_code: string;
    type: string;
};

export type TimeSeries = {
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
};
