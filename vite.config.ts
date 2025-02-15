import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';

const viteConfig = defineConfig((env) => {
  const isDevMode = env.mode.includes('development');

  return {
    base: '/likelion-react-homework6/',
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
      reactClickToComponent(),
      tailwindcss(),
    ],
    server: {
      host: 'localhost',
      port: 3000,
    },
    preview: {
      host: 'localhost',
      port: 8080,
    },
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: isDevMode
          ? '_[local]_[hash:base64:3]'
          : '_[hash:base64:6]',
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // .tsx 추가
  };
});

export default viteConfig;
