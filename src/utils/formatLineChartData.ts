import { DateTime } from 'luxon';

import type { TimeSeries } from '@market-pulse-app/types/timeSeries.types';
import type { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

const formatLineChartData = (values: TimeSeries[]): LineChartData => {
    return values.reduce(
        (accumulator, currentValue, index) => {
            // NOTA: Esto es para evitar que el gráfico dibuje etiquetas en el eje X que son innecesarias.
            if (index % 4 === 0) {
                accumulator.labels.push(DateTime.fromISO(currentValue.datetime).setLocale('es').toFormat('d MMM'));
            } else {
                accumulator.labels.push('');
            }
            accumulator.datasets[0].data.push(Number.parseFloat(currentValue.close));
            return accumulator;
        },
        { labels: [], datasets: [{ data: [] }] } as LineChartData,
    );
};

export default formatLineChartData;
