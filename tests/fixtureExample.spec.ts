import {test, expect, Page} from '@playwright/test';

type MyFixture ={
    webApp: string;
}

type LoginTestFixture ={
    myPage : Page;
}

const myTest = test.extend<MyFixture & LoginTestFixture>({
    
    webApp: async({}, use) => {
        await use("Hello WebApp");
    },
    
    myPage: async({page}, use) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await use(page);
    }
});

myTest("Check webApp fixture @myFix1", async ({webApp}) => {
    console.log(webApp);
    expect(webApp).toBe("Hello WebApp");
});

myTest("Check myPage fixture @myFix2", async ({myPage}) => {
    await myPage.locator('(//div[@class="inventory_item_price"])[1]').isVisible();
    await myPage.click('#add-to-cart-sauce-labs-backpack');
    await expect(myPage.locator('.shopping_cart_badge')).toHaveText('1');
});

