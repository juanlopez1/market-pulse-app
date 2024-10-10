import type { FC } from 'react';

import {
    StockDetailRowContainer,
    StockDetailRowLabel,
    StockDetailRowValue,
} from '@market-pulse-app/components/StockDetail/StockDetail.style';

type StockDetailRowProps = {
    label: string;
    value?: string;
};

const StockDetailRow: FC<StockDetailRowProps> = ({ label, value }) => (
    <StockDetailRowContainer>
        <StockDetailRowLabel>{label}</StockDetailRowLabel>
        <StockDetailRowValue numberOfLines={2} ellipsizeMode="tail">
            {value}
        </StockDetailRowValue>
    </StockDetailRowContainer>
);

export default StockDetailRow;
