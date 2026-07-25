import {test as setup, expect} from '@playwright/test';

setup("setup login action", async ({page})=> {
        await page.goto('https://www.saucedemo.com/', {waitUntil: 'domcontentloaded'});
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.context().storageState({ path: 'loginSession.json' });
});