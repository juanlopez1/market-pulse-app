import { Button, styled, Text, YStack } from 'tamagui';

export const Container = styled(YStack, {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
});

export const Message = styled(Text, {
    color: '$orange',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
});

export const RetryButton = styled(Button, {
    variant: 'outlined',
    color: '$white',
    borderColor: '$white',
});
