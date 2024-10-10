import type { ReactNode } from 'react';
import { renderHook, act, waitFor } from '@testing-library/react-native';

import useStocks, { StocksProvider } from '@market-pulse-app/contexts/stocks.context';
import stocksAPI from '@market-pulse-app/api/stocks.api';
import type { Stock } from '@market-pulse-app/types/stock.types';

jest.mock('@market-pulse-app/api/stocks.api');

const wrapper = ({ children }: { children: ReactNode }) => <StocksProvider>{children}</StocksProvider>;

describe('StocksProvider', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch stocks correctly', async () => {
        const mockStocks = [
            { symbol: 'APP', name: 'Apple' },
            { symbol: 'APP', name: 'Google' },
        ] as Stock[];
        (stocksAPI.getAllAvailableStocks as jest.Mock).mockResolvedValueOnce(mockStocks);

        const { result } = renderHook(() => useStocks(), { wrapper });

        expect(result.current.fetching).toBe(true);

        await act(async () => {
            result.current.getStocks();
        });

        await waitFor(() => {
            expect(result.current.stocks).toEqual(mockStocks);
            expect(result.current.error).toBe(false);
            expect(result.current.fetching).toBe(false);
        });
    });

    it('should handle errors during fetch', async () => {
        (stocksAPI.getAllAvailableStocks as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

        const { result } = renderHook(() => useStocks(), { wrapper });

        await act(async () => {
            result.current.getStocks();
        });

        await waitFor(() => {
            expect(result.current.error).toBe(true);
            expect(result.current.fetching).toBe(false);
        });
    });

    it('should select stock correctly', () => {
        const mockStock = { symbol: 'APP', name: 'Apple' } as Stock;

        const { result } = renderHook(() => useStocks(), { wrapper });

        act(() => {
            result.current.selectStock(mockStock);
        });

        expect(result.current.selectedStock).toEqual(mockStock);
    });
});
