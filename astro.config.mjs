// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), expressiveCode(), pagefind()],

  vite: {
    plugins: [tailwindcss()]
  }
});