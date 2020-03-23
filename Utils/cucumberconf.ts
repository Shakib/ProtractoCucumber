import {Config, browser} from 'protractor';
var reporter = require('cucumber-html-reporter');

export let config : Config = {

    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    onPrepare : function() {
         
        browser.driver.manage().window().maximize();
    },
    onComplete: function(){

        var options = {
            theme: 'bootstrap',
            jsonFile: './Report/cucumberreport.json',
            output: './Report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
     
        reporter.generate(options);

    },
    specs: ['../../M6AuthAdmin/M6AuthAdminFeatures/demoOne.feature'],

    cucumberOpts: {
        tags: '@regression',
        format: 'json:./Report/cucumberreport.json',
        // require step definitions
        require: [
          '../../JSFiles/M6AuthAdmin/StepDefinations-Admin/*.js' // accepts a glob
        ]
      }

    
}