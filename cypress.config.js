const { defineConfig } = require("cypress");

module.exports = defineConfig({


  viewportWidth: 1920,
  viewportHeight: 1080,

  env: {

    url: "https://amstest.astonbarclay.net"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "chromeWebSecurity":false,
  defaultCommandTimeout: 10000,
  "execTimeout": 60000,
  "requestTimeout":15000,
  "responseTimeout":15000,
  "experimentalFetchPolyfill": true,
  projectId:"tbnqky",
  reporter: 'mochawesome',
  reporterOptions: {
    "reportDir": "cypress/reports",
    "reportFilename":"report",
    overwrite: false,
    "html": true,
    "json": true,
    "charts":true,
  }
});
