const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos/e2e',
    videoCompression: 32,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  // Component Testing - Vite kullan (Next.js yerine)
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    videosFolder: 'cypress/videos/component',
    supportFile: 'cypress/support/component.js',
  },
})