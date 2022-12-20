const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://www.vr.com.br',
      viewportWidth: 1500,
      viewportHeight: 760
  },
  
});
