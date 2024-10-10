import { styled, Text, ToggleGroup, XStack } from 'tamagui';

export const ToggleGroupItem = styled(ToggleGroup.Item, {
    backgroundColor: '$black',
    borderColor: '$gray',
    variants: {
        selected: {
            true: {
                backgroundColor: '$carbon',
            },
        },
    },
});

export const Container = styled(XStack, {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
});

export const Title = styled(Text, {
    fontWeight: 'bold',
    color: '$gray',
    fontSize: 20,
});
