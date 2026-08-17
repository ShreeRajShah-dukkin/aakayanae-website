import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard Vite + React setup. Nothing fancy here on purpose —
// all the personality lives in src/index.css and the components.
export default defineConfig({
  plugins: [react()],
  base: '/aakayanae-website/',
})
