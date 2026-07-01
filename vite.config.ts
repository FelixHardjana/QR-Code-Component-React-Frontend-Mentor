import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/QR-Code-Component-React-Frontend-Mentor/',
  plugins: [react()],
})
