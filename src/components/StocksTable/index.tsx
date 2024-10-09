import { Fragment } from 'react';

import Loader from '@market-pulse-app/components/Loader';
import PaginatedList from '@market-pulse-app/components/StocksTable/PaginatedList';
import TableHeader from '@market-pulse-app/components/StocksTable/TableHeader';
import StocksSearcher from '@market-pulse-app/components/StocksSearcher';
import useStocks from '@market-pulse-app/contexts/stocks.context';

const StocksTable = () => {
    const { fetching } = useStocks();
    return (
        <Fragment>
            <StocksSearcher />
            <TableHeader />
            {fetching ? <Loader /> : <PaginatedList />}
        </Fragment>
    );
};

export default StocksTable;
