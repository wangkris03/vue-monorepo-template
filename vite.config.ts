import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

/** 配置项文档：https://cn.vitejs.dev/config */
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // test: {
  //   globals: true,
  //   environment: 'happy-dom',
  //   transformMode: {
  //     web: [/.[tj]sx$/],
  //   },
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
