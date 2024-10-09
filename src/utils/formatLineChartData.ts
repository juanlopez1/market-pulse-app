import type { TimeSeries } from '@market-pulse-app/types/timeSeries.types';
import type { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

const initialValue: LineChartData = { labels: [], datasets: [{ data: [] }] };

const formatLineChartData = (values: TimeSeries[]): LineChartData =>
    values.reduce((accumulator, currentValue) => {
        accumulator.labels.push(currentValue.datetime);
        accumulator.datasets[0].data.push(Number.parseFloat(currentValue.close));
        return accumulator;
    }, initialValue);

export default formatLineChartData;
