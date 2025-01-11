import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  api: "modern-compiler"
              }
          }
      }
  },

  integrations: [tailwind(), icon(), mdx()]
});