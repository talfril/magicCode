import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'ace-builds/src-noconflict/mode-javascript',
      'ace-builds/src-noconflict/mode-python',
      'ace-builds/src-noconflict/mode-cpp',  // Убедитесь, что путь верный
      'ace-builds/src-noconflict/theme-github'
    ]
  }
})
