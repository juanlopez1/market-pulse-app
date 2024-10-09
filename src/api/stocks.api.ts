import type { GetAllAvailableStocksResponse } from '@market-pulse-app/api/stocks.types';
import type { Stock } from '@market-pulse-app/types/stock.types';
import { httpGet } from '@market-pulse-app/services/http.service';

class StocksAPI {
    getAllAvailableStocks = async (): Promise<Stock[]> => {
        const response = await httpGet<GetAllAvailableStocksResponse>('stocks?show_plan=true');
        return response.data.filter((stock) => stock.access?.plan === 'Basic');
    };
}

const stocksAPI = new StocksAPI();
export default stocksAPI;
