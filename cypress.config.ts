import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'src/cypress/fixtures',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1360,
    viewportHeight: 1000,
  },
});
