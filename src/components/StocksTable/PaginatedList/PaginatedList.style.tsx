import { Button, Separator, styled, XStack } from 'tamagui';

export const ListSeparator = styled(Separator, {
    marginVertical: 10,
    borderColor: '$gray',
});

export const ListFooterContainer = styled(XStack, {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '$carbon',
    paddingVertical: 20,
});

export const ListFooterButton = styled(Button, {
    variant: 'outlined',
    color: '$white',
    borderColor: '$white',
});
