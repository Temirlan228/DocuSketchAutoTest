const { test, expect } = require('@playwright/test'); //Create FastSpring account


let globalPage;
let context;

test.beforeAll('', async ({browser}) => {
    context = await browser.newContext();
    globalPage = await context.newPage();
});

test('newTest', async()=> {
    await globalPage.goto('https://sandbox.docusketch.com/portal/login');
    await globalPage.getByPlaceholder('E-mail').fill('almas.nuketayev@docusketch.com');
    await globalPage.getByPlaceholder('Password').fill('newTest123$');
    await globalPage.locator('#login-form > fieldset > section:nth-child(2) > button').click(); // login

    await globalPage.locator('#admineditor > span > a > span').click(); //change to the admin role
    await globalPage.waitForTimeout(5000);
    await globalPage.locator('#left-panel > div > nav > ul > li:nth-child(7) > a').click(); //go to the all contracts list
    await globalPage.waitForTimeout(5000);
    await globalPage.frameLocator('#content > iframe').locator('body > app-root > app-contracts > app-contracts-list > div.overflow-auto > table > tbody > tr:nth-child(1) > td:nth-child(8) > a').click();
    await globalPage.waitForTimeout(5000);

    await globalPage.locator('body > app-root > app-contract > div > aside > div > section.pb-6.px-6.mb-6.border-bottom.border-light-dark > app-add-estimate-product').click();


});