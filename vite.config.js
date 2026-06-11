import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // add
  base: "/portofolio_mrfsmryn/",
  build: {
    minify: false
  }
})
