import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use DEPLOY_BASE env var when building for GitHub Pages project sites
const base = process.env.DEPLOY_BASE || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
