// cypress.config.js
const { defineConfig } = require("cypress");
//Allure Report
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 900,
    viewportHeight: 750,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
