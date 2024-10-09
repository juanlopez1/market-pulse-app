import { Fragment } from 'react';
import { FlashList } from '@shopify/flash-list';

import Loader from '@market-pulse-app/components/Loader';
import Separator from '@market-pulse-app/components/StocksTable/Separator';
import TableHeader from '@market-pulse-app/components/StocksTable/TableHeader';
import TableItem from '@market-pulse-app/components/StocksTable/TableItem';
import useStocks from '@market-pulse-app/contexts/stocks.context';

const StocksTable = () => {
    const { fetching, stocks } = useStocks();
    return (
        <Fragment>
            <TableHeader />
            {fetching ? (
                <Loader />
            ) : (
                <FlashList
                    data={stocks}
                    renderItem={({ item }) => <TableItem stock={item} />}
                    keyExtractor={(item) => `${item.symbol}-${item.exchange}`}
                    ItemSeparatorComponent={Separator}
                    estimatedItemSize={100}
                />
            )}
        </Fragment>
    );
};

export default StocksTable;
