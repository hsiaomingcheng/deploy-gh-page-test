import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/deploy-gh-page-test/',
  plugins: [vue()],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
})
