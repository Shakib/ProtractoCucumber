import {Config, browser} from 'protractor';
var { SpecReporter } = require('jasmine-spec-reporter');

export let config : Config = {

    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    onPrepare : function() {
         
        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(new SpecReporter({
          displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none) 
          displaySuccessesSummary: false, // display summary of all successes after execution 
          displayFailuresSummary: true,   // display summary of all failures after execution 
          displayPendingSummary: true,    // display summary of all pending specs after execution 
          displaySuccessfulSpec: true,    // display each successful spec 
          displayFailedSpec: true,        // display each failed spec 
          displayPendingSpec: false,      // display each pending spec 
          displaySpecDuration: false,     // display each spec duration 
          displaySuiteNumber: false,      // display each suite number (hierarchical) 
          colors: {
              success: 'green',
              failure: 'red',
              pending: 'yellow'
          },
          prefixes: {
              success: '✓ ',
              failure: '✗ ',
              pending: '* '
          },
          customProcessors: []
      }));
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