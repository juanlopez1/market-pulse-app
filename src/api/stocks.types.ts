import type { Stock } from '@market-pulse-app/types/stock.types';

export type GetAllAvailableStocksResponse = {
    count: number;
    data: Stock[];
    status: string;
};
