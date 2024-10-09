import type { Stock } from '@market-pulse-app/types/stock.types';

export type GetAllStocksResponse = {
    count: number;
    data: Stock[];
    status: string;
};
