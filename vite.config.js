import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH lets the same build be served from a sub-path, e.g. GitHub
// Pages at https://<user>.github.io/wedding/. Unset, it serves from '/'.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
