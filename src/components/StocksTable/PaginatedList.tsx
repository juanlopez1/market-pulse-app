import { type FC, useEffect, useMemo, useState } from 'react';
import { Button, Separator, Text, XStack } from 'tamagui';
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons';
import { FlashList } from '@shopify/flash-list';

import TableItem from '@market-pulse-app/components/StocksTable/TableItem';
import useStocks from '@market-pulse-app/contexts/stocks.context';

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
            ItemSeparatorComponent={() => <Separator marginVertical={10} borderColor="#2f2f2f" />}
            estimatedItemSize={100}
            ListFooterComponent={
                <XStack
                    alignItems="center"
                    justifyContent="space-between"
                    borderTopWidth={1}
                    borderColor="#2f2f2f"
                    paddingVertical={20}
                >
                    <Button
                        variant="outlined"
                        color="#d9d9d9"
                        borderColor="#d9d9d9"
                        onPress={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft color="#d9d9d9" />
                    </Button>
                    <Text color="#747474">{`Pagina ${currentPage} de ${totalPages}`}</Text>
                    <Button
                        variant="outlined"
                        color="#d9d9d9"
                        borderColor="#d9d9d9"
                        onPress={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight color="#d9d9d9" />
                    </Button>
                </XStack>
            }
        />
    );
};

export default PaginatedList;
