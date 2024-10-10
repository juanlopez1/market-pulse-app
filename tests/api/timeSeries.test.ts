import timeSeriesAPI from '@market-pulse-app/api/timeSeries.api';
import { httpGet } from '@market-pulse-app/services/http.service';

jest.mock('@market-pulse-app/services/http.service');

describe('TimeSeriesAPI', () => {
    it('should fetch time series data by interval and symbol', async () => {
        const mockResponse = {
            data: [
                { datetime: '2024-10-08', close: 100 },
                { datetime: '2024-10-09', close: 102 },
            ],
        };

        (httpGet as jest.Mock).mockResolvedValue(mockResponse);

        const interval = '1day';
        const symbol = 'AAPL';
        const response = await timeSeriesAPI.getByIntervalAndSymbol({ interval, symbol });

        expect(response).toEqual(mockResponse);
        expect(httpGet).toHaveBeenCalledWith(
            `time_series?symbol=${symbol}&interval=${interval}&apikey=${process.env.EXPO_PUBLIC_TWELVE_DATA_API_KEY}`,
        );
    });
});
