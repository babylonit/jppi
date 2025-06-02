// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://joanapaper.com',
  vite: {
    server: {
      hmr: {
        timeout: 120000 // Increased to 120 seconds
      }
    }
  },

});