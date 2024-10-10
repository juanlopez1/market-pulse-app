import StockDetail from '@market-pulse-app/components/StockDetail/StockDetail';
import TimeSeriesChart from '@market-pulse-app/components/TimeSeriesChart';
import { Container } from '@market-pulse-app/screens/StockDetail/StockDetail.style';

const StockDetailScreen = () => (
    <Container>
        <StockDetail />
        <TimeSeriesChart />
    </Container>
);

export default StockDetailScreen;
