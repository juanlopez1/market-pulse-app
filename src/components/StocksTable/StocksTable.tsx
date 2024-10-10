import { Fragment } from 'react';

import Loader from '@market-pulse-app/components/Loader/Loader';
import PaginatedList from '@market-pulse-app/components/StocksTable/PaginatedList/PaginatedList';
import TableHeader from '@market-pulse-app/components/StocksTable/TableHeader/TableHeader';
import StocksSearcher from '@market-pulse-app/components/StocksSearcher/StocksSearcher';
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
