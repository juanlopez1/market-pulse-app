import { FlatList } from 'react-native';
import { Input, Separator, styled, Text } from 'tamagui';

import type { Stock } from '@market-pulse-app/types/stock.types';

export const ItemsList = styled(FlatList as new () => FlatList<Stock>, {
    position: 'absolute',
    top: 103,
    left: 0,
    right: 0,
    backgroundColor: '$carbon',
    borderWidth: 1,
    borderColor: '$white',
    borderRadius: 8,
    padding: 15,
    zIndex: 1,
    maxHeight: 400,
    contentContainerStyle: { paddingBottom: 30 },
});

export const FilterInput = styled(Input, {
    backgroundColor: '$carbon',
    borderColor: '$gray',
    color: '$orange',
});

export const Title = styled(Text, {
    fontWeight: 'bold',
    color: '$white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
});

export const ListSeparator = styled(Separator, {
    marginVertical: 10,
    borderColor: '$gray',
});

export const ItemName = styled(Text, {
    color: '$white',
});
