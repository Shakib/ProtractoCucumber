"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../../JSFiles/**/*.spec.js'],
    suites: {
        smoke: ['../../JSFiles/**/calculator.spec.js'],
        regression: ['../../JSFiles/**/calculatorwd.spec.js']
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xpZW50Y29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWxzL2tsaWVudGNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFFaEMsUUFBQSxNQUFNLEdBQVk7SUFFekIsYUFBYSxFQUFFLElBQUk7SUFFbkIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsU0FBUyxFQUFHO1FBRVIsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLDRCQUE0QixDQUFDO0lBRXJDLE1BQU0sRUFBRztRQUNMLEtBQUssRUFBRyxDQUFDLHFDQUFxQyxDQUFDO1FBQy9DLFVBQVUsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO0tBRXhEO0lBRUQsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0NBQ0osQ0FBQSJ9