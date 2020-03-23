import { browser,by } from "protractor";
import { async } from "q";
import { calculatorwd } from "../M6Admin-pageObjects/calculatorwd";




describe('Chain locat ors demo', () => {


    it('Open Angular js website', async () => {

        let calc = new calculatorwd();

        await browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
         await calc.go.click();
         calc.getResult.getText().then(function (text) {
             console.log(text);
        })


        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();

    })

    it('Open Angular js website with different values', async () => {

        let calc = new calculatorwd();

        await browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        await calc.firstEditBox.sendKeys("5");
        await calc.secondEditBox.sendKeys("5");
         await calc.go.click();
         calc.getResult.getText().then(function (text) {
             console.log(text);
        })


        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();

    })

})
