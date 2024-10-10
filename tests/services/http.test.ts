import { processDefaultErrors, httpGet } from '@market-pulse-app/services/http.service';

describe('processDefaultErrors', () => {
    it('should throw an error for status 400', () => {
        const mockResponse = { ok: false, status: 400 } as Response;
        expect(() => processDefaultErrors(mockResponse)).toThrow('Bad request: 400');
    });

    it('should throw an error for status 404', () => {
        const mockResponse = { ok: false, status: 404 } as Response;
        expect(() => processDefaultErrors(mockResponse)).toThrow('Not found: 404');
    });

    it('should throw an error for status >= 500', () => {
        const mockResponse = { ok: false, status: 500 } as Response;
        expect(() => processDefaultErrors(mockResponse)).toThrow('Server error: 500');
    });

    it('should throw a generic error for other failed requests', () => {
        const mockResponse = { ok: false, status: 418 } as Response;
        expect(() => processDefaultErrors(mockResponse)).toThrow('Failed to proceed: 418');
    });

    it('should not throw an error for successful response', () => {
        const mockResponse = { ok: true, status: 200 } as Response;
        expect(() => processDefaultErrors(mockResponse)).not.toThrow();
    });
});

describe('httpGet', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    it('should return data when fetch is successful', async () => {
        const mockData = { key: 'value' };
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        });

        const result = await httpGet('/test-endpoint');
        expect(result).toEqual(mockData);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.EXPO_PUBLIC_TWELVE_DATA_API_URL}/test-endpoint`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    });

    it('should throw an error when fetch fails with status 400', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 400,
        });

        await expect(httpGet('/test-endpoint')).rejects.toThrow('Bad request: 400');
    });

    it('should throw an error when fetch fails with status 404', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 404,
        });

        await expect(httpGet('/test-endpoint')).rejects.toThrow('Not found: 404');
    });

    it('should throw an error for server errors (500+)', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 500,
        });

        await expect(httpGet('/test-endpoint')).rejects.toThrow('Server error: 500');
    });
});
