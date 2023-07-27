import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';

const { PUBLIC_STORYBLOK_ACCESS_TOKEN } = loadEnv(import.meta.env.PUBLIC_STORYBLOK_ACCESS_TOKEN, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
      apiOptions: {
        region: "us",
      }
    }),
    tailwind(),
  ],
});