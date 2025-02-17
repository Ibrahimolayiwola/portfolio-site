import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    createHtmlPlugin({
      inject: {
        data: {
          cssFile: '',
        }
      },
      transformIndexHtml: (html) => {
        const cssFile = findHashedCssFile();
        return html.replace('<%= cssFile %>', cssFile);
      },
    }),
  ],

  server: {
    herders: {
      'Cache-Control': 'public, max-age=3600'
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    manifest: true,
  }
})

function findHashedCssFile() {
  const distPath = path.resolve(__dirname, 'dist/assets');
  const files = fs.readdirSync(distPath);
  const cssFile = files.find(file => file.endsWith('.css'));
  return cssFile ? `/assets/${cssFile}` : '';
}