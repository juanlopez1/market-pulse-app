import { Text, ToggleGroup } from 'tamagui';

import useTimeSeries from '@market-pulse-app/contexts/timeSeries.context';
import type { TimeSeriesInterval } from '@market-pulse-app/types/timeSeries.types';
import {
    Container,
    Title,
    ToggleGroupItem,
} from '@market-pulse-app/components/TimeSeriesChart/IntervalSelector/IntervalSelector.style';

const intervalFilters: { label: string; value: TimeSeriesInterval }[] = [
    { label: '1 día', value: '1day' },
    { label: '1 semana', value: '1week' },
    { label: '1 mes', value: '1month' },
];

const IntervalSelector = () => {
    const { fetching, selectedInterval, selectInterval } = useTimeSeries();

    const handleIntervalChange = (interval: string) => {
        if (interval === '') {
            return;
        }
        selectInterval(interval as TimeSeriesInterval);
    };

    return (
        <Container>
            <Title>Cotización</Title>
            {/* @ts-ignore */}
            <ToggleGroup
                type="single"
                value={selectedInterval}
                onValueChange={handleIntervalChange}
                disabled={fetching}
            >
                {intervalFilters.map((i) => {
                    const selected = selectedInterval === i.value;
                    return (
                        <ToggleGroupItem key={i.value} value={i.value} selected={selected}>
                            <Text color={selected ? '$orange' : '$gray'}>{i.label}</Text>
                        </ToggleGroupItem>
                    );
                })}
            </ToggleGroup>
        </Container>
    );
};

export default IntervalSelector;
