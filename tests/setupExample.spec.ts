import {test, expect, Page} from '@playwright/test';

test("products page test ", async ({page})=> {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.locator('(//div[@class="inventory_item_price"])[1]').isVisible();
    await page.click('#add-to-cart-sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.waitForTimeout(2000);

});

test("cart page test @setup", async ({page})=> {

    await page.goto("https://www.saucedemo.com/cart.html");
    await expect(page.locator("#checkout")).toBeVisible();
});