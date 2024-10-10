import { config } from '@tamagui/config/v3';
import { createTamagui, createTokens } from 'tamagui';

import colors from '@market-pulse-app/constants/colors';

const tokens = createTokens({
    ...config.tokens,
    color: {
        ...config.tokens.color,
        ...colors,
    },
});

const tamaguiConfig = createTamagui({ ...config, tokens });

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}
