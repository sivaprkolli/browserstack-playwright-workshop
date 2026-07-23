import {test as loginTest, expect, Page} from '@playwright/test';

type LoginFixtures = {
    loginAction : Page;
}

export const test = loginTest.extend<LoginFixtures>({
    loginAction : async ({page}, use)=> {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        //console.log('Login action executed');
        await use(page);
        //console.log('Login action completed');
    }
});