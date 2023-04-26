import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  worker: {
    plugins: [react()],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      exclude: [
        'vite.config.ts', '**/*.d.ts', 'src/index.tsx', '**/*.test.tsx',
        '**/*.test.ts', 'dist', 'src/models', '**/*.model.ts', '**/*.models.ts'
      ],
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: ['text'],
    },
  },
});
