import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {    // This tells Vite to forward any request that starts with /api to your backend server.
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
})