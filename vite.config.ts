import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {}, // Prevents errors related to `process.env`
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
