import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Proxy API calls to Flask during development
    // so you don't hit CORS issues
    proxy: {
      '/api': {
        target: 'https://sod-launchevent-backend.onrender.com', // I don't exactly know what to do here so you might wanna crosscheck this line @abhinav
        changeOrigin: true,
      }
    }
  }
})
