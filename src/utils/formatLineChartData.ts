import type { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

import type { StockValue } from '@market-pulse-app/types/stock.types';

const initialValue: LineChartData = { labels: [], datasets: [{ data: [] }] };

const formatLineChartData = (values: StockValue[]): LineChartData =>
    values.reduce((accumulator, currentValue) => {
        accumulator.labels.push(currentValue.datetime);
        accumulator.datasets[0].data.push(Number.parseFloat(currentValue.close));
        return accumulator;
    }, initialValue);

export default formatLineChartData;
