import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';
import svelte from "@astrojs/svelte";
import storyblok from '@storyblok/astro';

const { PUBLIC_STORYBLOK_ACCESS_TOKEN } = loadEnv(import.meta.env.PUBLIC_STORYBLOK_ACCESS_TOKEN, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
      apiOptions: {
        region: "us",
      },
      components: {
        'lesson-plan': 'storyblok/LessonPlan',
        'lmec_digital_collections_record': 'storyblok/LMECDigitalCollectionsRecord',
      },
    }),
    tailwind(),
    svelte(),
  ],
});