import { Fragment } from 'react';
import { XStack, Text } from 'tamagui';

import Separator from '@market-pulse-app/components/StocksTable/Separator';

const TableHeader = () => (
    <Fragment>
        <XStack paddingVertical={20} alignItems="center">
            <Text flex={2.5} textAlign="center" fontSize={16} color="#747474">
                Símbolo
            </Text>
            <Text flex={6} textAlign="center" fontSize={16} color="#747474">
                Nombre
            </Text>
            <Text flex={2.5} textAlign="center" fontSize={16} color="#747474">
                Moneda
            </Text>
            <Text flex={2.5} textAlign="center" fontSize={16} color="#747474">
                Tipo
            </Text>
        </XStack>
        <Separator />
    </Fragment>
);

export default TableHeader;
