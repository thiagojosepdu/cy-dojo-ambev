const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  projectId: "5jvt73",
  video: "false",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://conexaoqa.herokuapp.com/'
  },
});

// "viewportWidth": 1600,
// "viewportHeight": 900,
// "chromeWebSecurity" : false, 
// "video" : false

