import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react({ fastRefresh: false }),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 5000,
  },
  worker: {
    plugins: [react()],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      exclude: [
        '*.config.ts', '**/*.d.ts', 'src/index.tsx', '**/*.test.tsx',
        '**/*.test.ts', 'dist', 'src/models', '**/*.model.ts', '**/*.models.ts',
        'cypress', '.nyc_output', 'coverage'
      ],
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: ['text'],
    },
  },
});
