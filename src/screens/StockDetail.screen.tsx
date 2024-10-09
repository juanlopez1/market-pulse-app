import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { YStack } from 'tamagui';
import { LineChart } from 'react-native-chart-kit';

import StockDetail from '@market-pulse-app/components/StockDetail';
import useStocks from '@market-pulse-app/contexts/stocks.context';
import formatLineChartData from '@market-pulse-app/utils/formatLineChartData';

const screenWidth = Dimensions.get('window').width;

const StockDetailScreen = () => {
    const { fetching, timeSeries, getStockTimeSeries } = useStocks();

    useEffect(() => {
        getStockTimeSeries();
    }, [getStockTimeSeries]);

    return (
        <YStack flex={1} backgroundColor="#141414" padding={15} gap={15}>
            <StockDetail />
            {!fetching && timeSeries && (
                <LineChart
                    data={formatLineChartData(timeSeries)}
                    width={screenWidth}
                    height={400}
                    chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        color: () => '#767676',
                        strokeWidth: 2,
                        barPercentage: 0.5,
                    }}
                />
            )}
        </YStack>
    );
};

export default StockDetailScreen;
