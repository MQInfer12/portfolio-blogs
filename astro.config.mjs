import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://MQInfer12.github.io',
  base: '/',
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});