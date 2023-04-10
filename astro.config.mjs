import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import astroI18next from 'astro-i18next'
import vercelStatic from '@astrojs/vercel/static'


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), astroI18next()],
  adapter: vercelStatic()
})
