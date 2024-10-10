import type { Config } from 'jest';

const config: Config = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)',
    ],
    moduleNameMapper: {
        '\\.(otf|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
    },
};

export default config;
