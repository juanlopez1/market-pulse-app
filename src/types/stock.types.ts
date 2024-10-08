export type Stock = {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: string;
    figi_code: string;
};

export type StockMeta = {
    symbol: string;
    interval: string;
    currency: string;
    exchange_timezone: string;
    exchange: string;
    mic_code: string;
    type: string;
};

export type StockValue = {
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
};
