import { Fragment } from 'react';
import { Separator } from 'tamagui';
import { FlashList } from '@shopify/flash-list';

import Loader from '@market-pulse-app/components/Loader';
import TableHeader from '@market-pulse-app/components/StocksTable/TableHeader';
import TableItem from '@market-pulse-app/components/StocksTable/TableItem';
import StocksSearcher from '@market-pulse-app/components/StocksSearcher';
import useStocks from '@market-pulse-app/contexts/stocks.context';

const StocksTable = () => {
    const { fetching, stocks } = useStocks();
    return (
        <Fragment>
            <StocksSearcher />
            <TableHeader />
            {fetching ? (
                <Loader />
            ) : (
                <FlashList
                    data={stocks}
                    renderItem={({ item }) => <TableItem stock={item} />}
                    keyExtractor={(item) => `${item.symbol}-${item.exchange}`}
                    ItemSeparatorComponent={() => <Separator marginVertical={10} borderColor="#2f2f2f" />}
                    estimatedItemSize={100}
                />
            )}
        </Fragment>
    );
};

export default StocksTable;
