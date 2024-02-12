const { test, expect } = require('@playwright/test'); //Create Zoho account
import {firstName, lastName, email, companyName, password, phoneNumber} from "./testHelpers/testData";

test('newTest', async({page})=> {
    await page.goto('https://sandbox.docusketch.com/ds-ui/get-started/sign-up?templateID=6486e65581778e10bf4f0074')
    await page.click('.country-switcher-btn')  //Country selector

    await page.locator('#first-name').fill(firstName)
    await page.locator('#last-name').fill(lastName)
    await page.locator('#email').fill(email)
    await page.locator('#company-name').fill(companyName)
    await page.locator('#phone-number').fill(phoneNumber)
    await page.locator('#password').fill(password)
    await page.locator('#password-confirm').fill(password) //Input data


    const dropdownSelector = await page.locator("body > app-root > app-layout > app-sign-up > div > div > section.mx-n3.mx-md-0.mt-4.pt-8.pb-2.px-3.px-md-6.border.border-light-dark.border-radius-4 > app-sign-up-address-form > form > section.form-2-col.mb-3.ng-untouched.ng-pristine.ng-invalid > div:nth-child(2) > app-select > div > ng-select");
    await dropdownSelector.click();
    await page.waitForSelector('.ng-option');//state selector
    await page.click('.ng-option', { text: 'Alabama' });// Na ety hyety ia potratil syka 3 chasa syka typoi selector ne raspoznaval sebyia kak selector

    await page.locator('#billing-city').fill('Alabama');
    await page.locator('#billing-address').fill('TestAddress');
    await page.locator('#billing-zip-code').fill('35004');

    await page.click('.checkbox-label'); // Same as Billing Address - checkbox

    await page.locator('body > app-root > app-layout > app-sign-up > div > div > div.my-8 > div.d-flex.justify-content-center.mb-6.t-and-c-container > div > label > span').click(); // Terms & Conditions - checkbox

    await page.locator('#submit-btn').click(); // SignUp & Make a Payment button


    await page.frameLocator('body > ngb-modal-window > div > div > app-hosted-payment-modal > div.modal-body > iframe').locator('#subscribe-container > form > div.row.css-2xzqzv > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > div > div > div.d-flex.align-items-center.flex-wrap.mb-4 > div > a:nth-child(1)').click();
    await page.waitForTimeout(5000)
    await page.frameLocator('body > ngb-modal-window > div > div > app-hosted-payment-modal > div.modal-body > iframe').locator('#submit-button').click(); //Frame - card data

















    // await page.click('#submit-btn') // Sign up & Make a Payment button

// await page.frameLocator('body > ngb-modal-window > div > div > app-hosted-payment-modal > div.modal-body > iframe')


    // await page.screenshot({path: 'img/window25.jpg'}); //final screen
    // await page.locator("body > app-root > app-layout > app-sign-up > div > div > section.mx-n3.mx-md-0.mt-4.pt-8.pb-2.px-3.px-md-6.border.border-light-dark.border-radius-4 > app-sign-up-address-form > form > section.form-2-col.mb-3.ng-untouched.ng-pristine.ng-invalid > div:nth-child(2) > app-select > div > ng-select").selectOption({label:'Alabama'});
    // await page.locator('body > app-root > app-layout > app-sign-up > div > div > section.mx-n3.mx-md-0.mt-4.pt-8.pb-2.px-3.px-md-6.border.border-light-dark.border-radius-4 > app-sign-up-address-form > form > section.form-2-col.mb-3.ng-untouched.ng-pristine.ng-invalid > div:nth-child(2) > app-select').selectOption({value:'0'});

});
