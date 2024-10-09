import { Spinner, YStack } from 'tamagui';

const Loader = () => (
    <YStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
    </YStack>
);

export default Loader;
