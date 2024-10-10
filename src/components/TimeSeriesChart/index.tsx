import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { YStack } from 'tamagui';
import { LineChart } from 'react-native-chart-kit';
import type { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

import ErrorMessage from '@market-pulse-app/components/ErrorMessage/ErrorMessage';
import Loader from '@market-pulse-app/components/Loader/Loader';
import IntervalSelector from '@market-pulse-app/components/TimeSeriesChart/IntervalSelector/IntervalSelector';
import useTimeSeries from '@market-pulse-app/contexts/timeSeries.context';
import formatLineChartData from '@market-pulse-app/utils/formatLineChartData';
import colors from '@market-pulse-app/constants/colors';

const screenWidth = Dimensions.get('window').width;

const TimeSeriesChart = () => {
    const { error, fetching, timeSeries, getStockTimeSeries } = useTimeSeries();
    const chartData: LineChartData = useMemo(
        () => (timeSeries ? formatLineChartData(timeSeries) : { labels: [], datasets: [{ data: [0] }] }), // Data básica para instanciar el componente LineChart
        [timeSeries],
    );

    return (
        <YStack flex={1}>
            <IntervalSelector />
            {error ? (
                <ErrorMessage message="Disculpe, no hemos podido obtener la cotización" onRetry={getStockTimeSeries} />
            ) : fetching ? (
                <Loader />
            ) : (
                <LineChart
                    data={chartData}
                    width={screenWidth - 15 * 2}
                    height={500}
                    chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        color: () => colors.gray,
                        strokeWidth: 2,
                    }}
                />
            )}
        </YStack>
    );
};

export default TimeSeriesChart;
