import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

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

  integrations: [tailwind(), icon()]
});