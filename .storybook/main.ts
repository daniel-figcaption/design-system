import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (viteConfig) => {
    viteConfig.plugins = viteConfig.plugins || [];
    viteConfig.plugins.push(svgr());
    viteConfig.resolve = {
      ...(viteConfig.resolve || {}),
      alias: {
        '@src': path.resolve(__dirname, '../src'),
        '@sb': path.resolve(__dirname, './'),
      },
    };

    return viteConfig;
  },
};

export default config;
