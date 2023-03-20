import { defineConfig } from 'astro/config';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://github.com/MQInfer12/portfolio-blogs',
  build: {
    assets: '_astro',
  }
});