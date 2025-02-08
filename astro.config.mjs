import { defineConfig } from 'astro/config';

import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
      css: {
          preprocessorOptions: {
              scss: {
                  api: "modern-compiler"
              }
          }
      }
  },

  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
        portfolio: 'components/Home/Portfolio',
        project: 'components/Project',
      },
  }),
  tailwind(), 
  icon(), 
  mdx()]
});