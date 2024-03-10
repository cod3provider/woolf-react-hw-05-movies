import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/woolf-react-hw-05-movies/',
  plugins: [react()],
})
