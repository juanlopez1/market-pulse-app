import { Fragment } from 'react';
import { XStack, Text } from 'tamagui';

const TableHeader = () => (
    <Fragment>
        <XStack paddingVertical={20} alignItems="center" borderBottomWidth={1} borderColor="#2f2f2f">
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
    </Fragment>
);

export default TableHeader;
