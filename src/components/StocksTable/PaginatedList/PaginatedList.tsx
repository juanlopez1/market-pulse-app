import { type FC, useEffect, useMemo, useState } from 'react';
import { Text } from 'tamagui';
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons';
import { FlashList } from '@shopify/flash-list';

import TableItem from '@market-pulse-app/components/StocksTable/TableItem/TableItem';
import useStocks from '@market-pulse-app/contexts/stocks.context';
import {
    ListFooterButton,
    ListFooterContainer,
    ListSeparator,
} from '@market-pulse-app/components/StocksTable/PaginatedList/PaginatedList.style';

type PaginatedListProps = {
    itemsPerPage?: number;
};

const PaginatedList: FC<PaginatedListProps> = ({ itemsPerPage = 10 }) => {
    const { stocks } = useStocks();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const currentStocks = useMemo(
        () => (stocks ? stocks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : []),
        [currentPage, itemsPerPage, stocks],
    );

    useEffect(() => {
        if (stocks) {
            setTotalPages(Math.ceil(stocks.length / itemsPerPage));
        }
    }, [itemsPerPage, stocks]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <FlashList
            data={currentStocks}
            renderItem={({ item }) => <TableItem stock={item} />}
            keyExtractor={(item) => `${item.symbol}-${item.exchange}`}
            ItemSeparatorComponent={() => <ListSeparator />}
            estimatedItemSize={100}
            ListFooterComponent={
                <ListFooterContainer>
                    <ListFooterButton onPress={handlePrevPage} disabled={currentPage === 1}>
                        <ChevronLeft color="$white" />
                    </ListFooterButton>
                    <Text color="$gray">{`Pagina ${currentPage} de ${totalPages}`}</Text>
                    <ListFooterButton onPress={handleNextPage} disabled={currentPage === totalPages}>
                        <ChevronRight color="$white" />
                    </ListFooterButton>
                </ListFooterContainer>
            }
        />
    );
};

export default PaginatedList;
