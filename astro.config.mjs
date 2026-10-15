// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hive5apiary.us',
  vite: {
    plugins: [tailwindcss()]
  }
});