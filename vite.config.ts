import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // IMPORTANTE: debe coincidir EXACTAMENTE con el nombre de tu repositorio en GitHub.
  // Si tu repo se llama distinto a "linea-tiempo-tecnica", cambia la línea de abajo.
  base: '/linea-tiempo-tecnica/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
