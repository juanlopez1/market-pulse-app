import { styled, Text, ToggleGroup, XStack } from 'tamagui';

import useTimeSeries from '@market-pulse-app/contexts/timeSeries.context';
import type { TimeSeriesInterval } from '@market-pulse-app/types/timeSeries.types';

const ToggleGroupItem = styled(ToggleGroup.Item, {
    backgroundColor: '#141414',
    borderColor: '#747474',
    variants: {
        selected: {
            true: {
                backgroundColor: '#282828',
            },
        },
    },
});

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
        <XStack alignItems="center" justifyContent="space-between" marginBottom={18}>
            <Text fontWeight="bold" color="#747474" fontSize={20}>
                Cotización
            </Text>
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
                            <Text color={selected ? '#df9a3f' : '#747474'}>{i.label}</Text>
                        </ToggleGroupItem>
                    );
                })}
            </ToggleGroup>
        </XStack>
    );
};

export default IntervalSelector;
