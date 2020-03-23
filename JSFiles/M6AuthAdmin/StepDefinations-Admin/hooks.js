"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@foo" }, function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.Before({ tags: "@foo or @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
});
// You can use the following shorthand when only specifying tags
cucumber_1.Before("@foo", function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before all scenarios
        console.log("TEST IS COMPLETED");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9NNkF1dGhBZG1pbi9TdGVwRGVmaW5hdGlvbnMtQWRtaW4vaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFDL0MsMkNBQXFDO0FBR3JDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQUU7SUFDckIsK0RBQStEO0FBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsRUFBRTtJQUM5Qix3RUFBd0U7QUFDMUUsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxFQUFFO0lBQzdCLHVFQUF1RTtBQUN6RSxDQUFDLENBQUMsQ0FBQztBQUVILGdFQUFnRTtBQUNoRSxpQkFBTSxDQUFDLE1BQU0sRUFBRTtJQUNiLCtEQUErRDtBQUNqRSxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDMUIsa0RBQWtEO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3hDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUV4QztJQUVILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==