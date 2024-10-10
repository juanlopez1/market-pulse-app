import { styled, Text, XStack } from 'tamagui';

export const Title = styled(Text, {
    fontWeight: 'bold',
    color: '$white',
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
});

export const StockDetailRowContainer = styled(XStack, {
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const StockDetailRowLabel = styled(Text, {
    flex: 1,
    color: '$gray',
    fontSize: 16,
});

export const StockDetailRowValue = styled(Text, {
    flex: 1,
    color: '$orange',
    fontSize: 16,
    textAlign: 'right',
});
