import type { Stock, StockMeta, StockValue } from '@market-pulse-app/types/stock.types';

export type GetAllStocksResponse = {
    count: number;
    data: Stock[];
    status: string;
};

export type GetDetailsBySymbolRequest = {
    interval: '1day' | '1week' | '1month'; // NOTE: TwelveData's API only supports: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 8h, 1day, 1week, 1month
    symbol: string;
};

export type GetDetailsBySymbolResponse = {
    meta: StockMeta;
    values: StockValue[];
    status: string;
};
