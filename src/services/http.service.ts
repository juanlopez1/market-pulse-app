export const processDefaultErrors = (response: Response) => {
    if (!response.ok) {
        if (response.status === 400) {
            throw new Error(`Bad request: ${response.status} `);
        }
        if (response.status === 404) {
            throw new Error(`Not found: ${response.status} `);
        }
        if (response.status >= 500) {
            throw new Error(`Server error: ${response.status} `);
        }
        throw new Error(`Failed to proceed: ${response.status}`);
    }
};

export async function httpGet<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${process.env.EXPO_PUBLIC_TWELVE_DATA_API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    processDefaultErrors(response);
    return response.json();
}
