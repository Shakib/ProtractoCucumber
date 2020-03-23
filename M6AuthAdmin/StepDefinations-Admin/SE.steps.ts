import {Given, When, Then} from 'cucumber';
import { calculatorwd } from '../M6Admin-pageObjects/calculatorwd';
import {browser} from 'protractor';
let calc = new calculatorwd();

Given('Jag vill navigera till kalkulator och kolla läget', async()=> {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });
  When('Jag läger två nummer först {string} och andra {string}', async(string, string2)=> {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
  });
  Then('output måste vara {string}', async(string)=> {
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {
        console.log("På svenska " + text);

    })
  });