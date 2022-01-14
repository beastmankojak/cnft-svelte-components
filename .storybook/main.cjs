const preprocess = require('svelte-preprocess');
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": preprocess
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        $lib: path.resolve(__dirname, '..', 'src', 'lib'),
      },
      //mainFields: ['svelte', 'browser', 'module', 'main'],
    };
    return config;
  }
}