import type { FC } from 'react';

import { Container, Message, RetryButton } from '@market-pulse-app/components/ErrorMessage/ErrorMessage.style';

type ErrorMessageProps = {
    message: string;
    onRetry?: () => void;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => (
    <Container>
        <Message>{message}</Message>
        {onRetry && <RetryButton onPress={onRetry}>Reintentar</RetryButton>}
    </Container>
);

export default ErrorMessage;
