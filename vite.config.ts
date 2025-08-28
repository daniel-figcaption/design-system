import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [svgr()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@sb': path.resolve(__dirname, './.storybook'),
    },
  },
});
