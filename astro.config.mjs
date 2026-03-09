// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.ozkancnc.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
