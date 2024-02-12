const { test, expect } = require('@playwright/test'); //Create FastSpring account
import {firstName, lastName, email, companyName, password, phoneNumber} from "./testHelpers/testData";

test('newTest', async({page})=> {
    await page.goto('https://sandbox.docusketch.com/ds-ui/get-started/sign-up?templateID=6486d83581778e10bf4f004b')
    await page.click('.country-switcher-btn')  //Country selector

    await page.locator('#first-name').fill(firstName)
    await page.locator('#last-name').fill(lastName)
    await page.locator('#email').fill(email)
    await page.locator('#company-name').fill(companyName)
    await page.locator('#phone-number').fill(phoneNumber)
    await page.locator('#password').fill(password)
    await page.locator('#password-confirm').fill(password) //Input data


    await page.click('.checkbox-label') // checkbox


    await page.click('#submit-btn') // Sign up & Make a Payment button


    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('Card Number').fill('4242424242424242');
    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('MM').fill('06');
    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('YY').fill('26');
    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('CVC').fill('*FN57'); //card


    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('Address').fill('Testaddress');
    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('City').fill('Alabama');
    await page.frameLocator('#fsc-popup-frame').locator('//*[@id="address"]/div[1]/div/div/select').selectOption('AL'); // State selector
    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('Phone Number').fill('87777777');
    await page.frameLocator('#fsc-popup-frame').getByPlaceholder('Zip Code').fill('35013');
    await page.frameLocator('#fsc-popup-frame').locator('//*[@id="orderForm"]/fieldset/div[7]/button[1]').click();



    // await frame.locator('#card-number').fill('4242424242424242')
    // await page.locator('#card-expire-month').fill('06')
    // await page.locator('#card-expire-year').fill('26')
    // await page.locator('#card-security').fill('#FN57')
    await page.screenshot({path:'img/window28.jpg'}); //final screen

});