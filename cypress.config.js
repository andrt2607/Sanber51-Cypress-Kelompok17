const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 5500,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 30000,
    waitForAnimations:true,
    force: true
  },
});