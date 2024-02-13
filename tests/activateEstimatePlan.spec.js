const { test, expect } = require('@playwright/test'); //Create FastSpring account


let globalPage;
let singleContractPage;
let context;

test.beforeAll('', async ({browser}) => {
    context = await browser.newContext();
    globalPage = await context.newPage();
});

test('Sign in and open single contract page', async () => {
    await globalPage.goto('https://sandbox.docusketch.com/portal/login');
    await globalPage.getByPlaceholder('E-mail').fill('almas.nuketayev@docusketch.com');
    await globalPage.getByPlaceholder('Password').fill('newTest123$');
    await globalPage.locator('#login-form > fieldset > section:nth-child(2) > button').click();

    await globalPage.locator('#admineditor > span > a > span').click();
    await globalPage.waitForTimeout(5000);
    await globalPage.locator('#left-panel > div > nav > ul > li:nth-child(7) > a').click();
    await globalPage.waitForTimeout(5000);


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        globalPage.frameLocator('#content > iframe').locator('body > app-root > app-contracts > app-contracts-list > div.overflow-auto > table > tbody > tr:nth-child(1) > td:nth-child(8) > a').click(),
    ]);

    singleContractPage = newPage;

    await singleContractPage.waitForLoadState();

    await singleContractPage.locator('body > app-root > app-contract > div > aside > div > section.pb-6.px-6.mb-6.border-bottom.border-light-dark > app-add-estimate-product').click();
    await globalPage.waitForTimeout(5000);
});