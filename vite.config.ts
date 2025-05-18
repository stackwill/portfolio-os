import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  base: './',
  define: {
    __BUILD_WATERMARK__: JSON.stringify('© 2025 William Hanlon | github.com/stackwill'),
  }
})
