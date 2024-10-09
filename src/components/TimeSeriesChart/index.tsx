import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { YStack } from 'tamagui';
import { LineChart } from 'react-native-chart-kit';

import ErrorMessage from '@market-pulse-app/components/ErrorMessage';
import Loader from '@market-pulse-app/components/Loader';
import IntervalSelector from '@market-pulse-app/components/TimeSeriesChart/IntervalSelector';
import useTimeSeries from '@market-pulse-app/contexts/timeSeries.context';
import formatLineChartData from '@market-pulse-app/utils/formatLineChartData';

const screenWidth = Dimensions.get('window').width;

const TimeSeriesChart = () => {
    const { error, fetching, timeSeries, getStockTimeSeries } = useTimeSeries();
    const chartData = useMemo(() => {
        if (timeSeries) {
            return formatLineChartData(timeSeries);
        }
    }, [timeSeries]);

    return (
        <YStack flex={1}>
            <IntervalSelector />
            {error ? (
                <ErrorMessage message="Disculpe, no hemos podido obtener la cotización" onRetry={getStockTimeSeries} />
            ) : fetching ? (
                <Loader />
            ) : (
                chartData && (
                    <LineChart
                        data={chartData}
                        width={screenWidth - 15 * 2}
                        height={500}
                        chartConfig={{
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientToOpacity: 0,
                            color: () => '#767676',
                            strokeWidth: 2,
                        }}
                    />
                )
            )}
        </YStack>
    );
};

export default TimeSeriesChart;
