import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwind from '@tailwindcss/postcss'

export default defineConfig({
  base: '/team-website/',
  plugins: [vue(), vueJsx(), vueDevTools()],
  css: { postcss: { plugins: [tailwind()] } },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
