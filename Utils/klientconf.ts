import {Config, browser} from 'protractor';

export let config : Config = {

    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    onPrepare : function() {
         
        browser.driver.manage().window().maximize();
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../../JSFiles/**/*.spec.js'],

    suites : {
        smoke : ['../../JSFiles/**/calculator.spec.js'],
        regression: ['../../JSFiles/**/calculatorwd.spec.js']

    },
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
}