import type {
    GetByIntervalAndSymbolRequest,
    GetByIntervalAndSymbolResponse,
} from '@market-pulse-app/api/timeSeries.types';
import { httpGet } from '@market-pulse-app/services/http.service';

class TimeSeriesAPI {
    getByIntervalAndSymbol = ({
        interval,
        symbol,
    }: GetByIntervalAndSymbolRequest): Promise<GetByIntervalAndSymbolResponse> =>
        httpGet<GetByIntervalAndSymbolResponse>(
            `time_series?symbol=${symbol}&interval=${interval}&apikey=${process.env.EXPO_PUBLIC_TWELVE_DATA_API_KEY}`,
        );
}

const timeSeriesAPI = new TimeSeriesAPI();
export default timeSeriesAPI;
