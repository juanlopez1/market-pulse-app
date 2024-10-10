import { useEffect } from 'react';

import ErrorMessage from '@market-pulse-app/components/ErrorMessage/ErrorMessage';
import StocksTable from '@market-pulse-app/components/StocksTable/StocksTable';
import useStocks from '@market-pulse-app/contexts/stocks.context';
import { Container } from '@market-pulse-app/screens/StocksTable/StocksTable.style';

const StocksTableScreen = () => {
    const { error, getStocks } = useStocks();

    useEffect(() => {
        getStocks();
    }, [getStocks]);

    return (
        <Container>
            {error ? (
                <ErrorMessage message="Disculpe, no hemos podido obtener la lista de acciones" onRetry={getStocks} />
            ) : (
                <StocksTable />
            )}
        </Container>
    );
};

export default StocksTableScreen;
