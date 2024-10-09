import type { FC } from 'react';
import { Button, Text, YStack } from 'tamagui';

type ErrorMessageProps = {
    message: string;
    onRetry?: () => void;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => (
    <YStack flex={1} justifyContent="center" alignItems="center">
        <Text color="#df9a3f" fontSize={16} textAlign="center" marginBottom={20}>
            {message}
        </Text>
        {onRetry && (
            <Button onPress={onRetry} variant="outlined" color="#d9d9d9" borderColor="#d9d9d9">
                Reintentar
            </Button>
        )}
    </YStack>
);

export default ErrorMessage;
