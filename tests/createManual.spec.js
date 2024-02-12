const { test, expect } = require('@playwright/test');
import {firstName, lastName, email, companyName, password, phoneNumber} from "./testHelpers/testData"
test('newTest', async({page})=> {
    await page.goto('https://sandbox.docusketch.com/portal/login')

    await page.getByPlaceholder('E-mail').fill('almas.nuketayev@docusketch.com');
    await page.getByPlaceholder('Password').fill('newTest123$');
    await page.locator('#login-form > fieldset > section:nth-child(2) > button').click(); // Login page

    await page.locator('#admineditor > span > a > span').click();


    await page.waitForTimeout(5000);

    const createUserButton = page.frameLocator('//*[@id="content"]/iframe').locator('body > app-root > app-user-contracts-page > div.container-fluid.py-4 > app-user-contracts-filters > form > div.d-flex.align-items-center.mb-4 > a');
    await createUserButton.click();

    await page.frameLocator('//*[@id="content"]/iframe').locator('#first-name').fill(firstName)
    await page.frameLocator('//*[@id="content"]/iframe').locator('#last-name').fill(lastName)


    const frameHandle = await page.waitForSelector('//*[@id="content"]/iframe');
    const frame = await frameHandle.contentFrame();
    const dropdownSelector = await frame.waitForSelector("body > app-root > app-user > div > app-user-internal > form > section > div:nth-child(3) > app-select > div > ng-select > div");
    await dropdownSelector.click();
    await frame.waitForSelector('.option-name');
    await frame.click('.option-name', { text: 'Internal' });



    await page.frameLocator('//*[@id="content"]/iframe').locator('#email').fill(email)
    await page.frameLocator('//*[@id="content"]/iframe').locator('#password').fill(password)
    await page.frameLocator('//*[@id="content"]/iframe').locator('#personal-phone').fill(phoneNumber)


    const dropdownSelector2 = await frame.waitForSelector("body > app-root > app-user > div > app-user-internal > form > section > div:nth-child(7) > app-select > div > ng-select > div > div > div.ng-input");
    await dropdownSelector2.click();
    await frame.waitForSelector('.option-name');
    await frame.click('.option-name', { text: 'USA' }) //second option

    const dropdownSelector3 = await frame.waitForSelector("body > app-root > app-user > div > app-user-internal > form > section > div:nth-child(8) > app-select > div > ng-select");
    await dropdownSelector3.click();
    await frame.waitForSelector('.option-name');
    await frame.click('.option-name', { text: 'En' })


    await page.waitForTimeout(5000);

    await page.frameLocator('//*[@id="content"]/iframe').locator('body > app-root > app-user > div > app-user-internal > form > div > div > button').click()






});
