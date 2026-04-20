import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base para GitHub Pages (repo name)
  base: '/tienda-perritos/',
  server: {
    port: 5173
  }
})