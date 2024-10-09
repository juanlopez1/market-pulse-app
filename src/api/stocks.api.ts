import type { GetAllStocksResponse } from '@market-pulse-app/api/stocks.types';
import { httpGet } from '@market-pulse-app/services/http.service';

class StocksAPI {
    getAll = (): Promise<GetAllStocksResponse> => httpGet<GetAllStocksResponse>('stocks');
}

const stocksAPI = new StocksAPI();
export default stocksAPI;
