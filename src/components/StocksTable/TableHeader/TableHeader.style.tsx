import { XStack, Text, styled } from 'tamagui';

export const Container = styled(XStack, {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '$carbon',
});

export const HeaderLabel = styled(Text, {
    textAlign: 'center',
    fontSize: 16,
    color: '$gray',
});
