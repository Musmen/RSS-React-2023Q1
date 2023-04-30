import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5000',
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    defaultCommandTimeout: 10000,
  },
  video: false,
  screenshotOnRunFailure: false,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      config.env.codeCoverageTasksRegistered = true;
      codeCoverageTask(on, config);
      return config;
    },
  },
});
