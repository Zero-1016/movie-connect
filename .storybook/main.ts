import type { StorybookConfig } from "@storybook/nextjs";

const path = require('path');
const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    webpackFinal: async config => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.resolve(__dirname, "../src/"),
            }
        }

        return config
    },
    docs: {
        autodocs: "tag",
    },
    staticDirs: [{
        from: '../public/fonts',
        to: 'public/fonts'
    }],
};
export default config;
