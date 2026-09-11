import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Universal relative base for GitHub Pages, Vercel, and Netlify
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Expose to local network (0.0.0.0)
    port: 5173,
  },
})

