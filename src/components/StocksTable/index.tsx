import { type FC, Fragment } from 'react';
import { Spinner, YStack } from 'tamagui';
import { FlashList } from '@shopify/flash-list';

import Separator from '@market-pulse-app/components/StocksTable/Separator';
import TableHeader from '@market-pulse-app/components/StocksTable/TableHeader';
import TableItem from '@market-pulse-app/components/StocksTable/TableItem';
import type { Stock } from '@market-pulse-app/types/stock.types';

type StocksTableProps = {
    stocks: Stock[];
    loading?: boolean;
};

const StocksTable: FC<StocksTableProps> = ({ stocks, loading = false }) => (
    <Fragment>
        <TableHeader />
        {loading ? (
            <YStack justifyContent="center" height="100%">
                <Spinner size="large" />
            </YStack>
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

export default StocksTable;
