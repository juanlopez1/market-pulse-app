import stocksAPI from '@market-pulse-app/api/stocks.api';
import { httpGet } from '@market-pulse-app/services/http.service';

jest.mock('@market-pulse-app/services/http.service');

describe('StocksAPI', () => {
    it('should return stocks with access plan "Basic"', async () => {
        const mockStocksResponse = {
            data: [
                { id: 1, name: 'Stock A', access: { plan: 'Basic' } },
                { id: 2, name: 'Stock B', access: { plan: 'Premium' } },
                { id: 3, name: 'Stock C', access: { plan: 'Basic' } },
            ],
        };

        (httpGet as jest.Mock).mockResolvedValue(mockStocksResponse);

        const stocks = await stocksAPI.getAllAvailableStocks();

        expect(stocks).toEqual([
            { id: 1, name: 'Stock A', access: { plan: 'Basic' } },
            { id: 3, name: 'Stock C', access: { plan: 'Basic' } },
        ]);
        expect(httpGet).toHaveBeenCalledWith('stocks?show_plan=true');
    });
});
