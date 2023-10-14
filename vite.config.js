import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*server: {
    host: '192.168.100.166', // Esto permite que se escuche en todas las interfaces de red
    port: 5173, // El puerto que estás utilizando
  },*/
})
