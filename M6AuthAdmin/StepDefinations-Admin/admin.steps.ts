import{Given, When, Then} from 'cucumber';
import{browser} from 'protractor';
import { calculatorwd } from '../M6Admin-pageObjects/calculatorwd';
import * as chai from 'chai';
var expect = chai.expect;
let calc = new calculatorwd();

Given('I will navigate to Calcs site', async()=>{
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });
  When('I add two numbers {string} and {string}', async(string, string2) => {
    await calc.firstEditBox.sendKeys(string);
        await calc.secondEditBox.sendKeys(string2);
  });
  Then('the output displyed should be {string}', async(string) => {
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
        console.log(text);
   });
  });