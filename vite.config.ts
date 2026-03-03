import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/divine-monitor-docs/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
