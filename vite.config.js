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

// Cambiar directorio y ejecutar el servidor de desarrollo
process.chdir('C:\\Users\\Administrador\\tienda-perritos')
require('child_process').exec('npm run dev')