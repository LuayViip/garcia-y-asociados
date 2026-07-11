// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/consts.ts';

// https://astro.build/config
const NOINDEX_PATHS = ['/aviso-legal/', '/politica-privacidad/', '/politica-cookies/'];

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
    }),
  ],
});
