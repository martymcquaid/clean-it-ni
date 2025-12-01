import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/bae30627-4956-4a8d-8ffc-e5b628b2b35c/preview',
  plugins: [react()],
  server: {
    port: 5181,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5181,
    },
  },
})
