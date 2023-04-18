import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
base: "/AI_Image_Generator/client",
  plugins: [react()],
})