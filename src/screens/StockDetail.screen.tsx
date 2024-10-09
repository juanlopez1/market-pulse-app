import { YStack } from 'tamagui';

import StockDetail from '@market-pulse-app/components/StockDetail';
import TimeSeriesChart from '@market-pulse-app/components/TimeSeriesChart';

const StockDetailScreen = () => (
    <YStack flex={1} backgroundColor="#141414" padding={15} gap={25}>
        <StockDetail />
        <TimeSeriesChart />
    </YStack>
);

export default StockDetailScreen;
