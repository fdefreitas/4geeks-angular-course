exports.config = {
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--test-type']
    }
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
