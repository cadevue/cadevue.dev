// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import pagefind from 'astro-pagefind';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), expressiveCode(), pagefind()],

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  redirects: {
    '/about-me': '/',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },

  site: 'https://cadevue.dev',
});