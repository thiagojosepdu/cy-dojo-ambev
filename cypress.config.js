const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({  
  projectId: "5jvt73",
  //video: "false",
  e2e: {
    setupNodeEvents(on, config) {
     allureWriter(on, config)

     const version = config.env.version || 'prd'
     config.env = require(`./cypress/config/${version}.json`)
     config.baseUrl = config.env.baseUrl

     return config;
      
    },
    baseUrl: 'https://conexaoqa.herokuapp.com/'
  },
});

// "viewportWidth": 1600,
// "viewportHeight": 900,
// "chromeWebSecurity" : false, 
// "video" : false

