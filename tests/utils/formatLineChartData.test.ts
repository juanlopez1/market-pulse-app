import { DateTime } from 'luxon';

import formatLineChartData from '@market-pulse-app/utils/formatLineChartData';
import type { TimeSeries } from '@market-pulse-app/types/timeSeries.types';

describe('formatLineChartData', () => {
    it('should correctly format data for the line chart', () => {
        const mockTimeSeries = [
            { datetime: '2023-10-01T12:00:00Z', close: '100.5' },
            { datetime: '2023-10-02T12:00:00Z', close: '102.7' },
            { datetime: '2023-10-03T12:00:00Z', close: '101.3' },
            { datetime: '2023-10-04T12:00:00Z', close: '103.1' },
            { datetime: '2023-10-05T12:00:00Z', close: '104.2' },
        ] as TimeSeries[];

        const result = formatLineChartData(mockTimeSeries);

        const expectedLabels = [
            DateTime.fromISO('2023-10-01T12:00:00Z').setLocale('es').toFormat('d MMM'),
            '',
            '',
            '',
            DateTime.fromISO('2023-10-05T12:00:00Z').setLocale('es').toFormat('d MMM'),
        ];
        const expectedData = [100.5, 102.7, 101.3, 103.1, 104.2];
        expect(result.labels).toEqual(expectedLabels);
        expect(result.datasets[0].data).toEqual(expectedData);
    });

    it('should return an empty object if no values are provided', () => {
        const result = formatLineChartData([]);
        expect(result.labels).toEqual([]);
        expect(result.datasets[0].data).toEqual([]);
    });
});
