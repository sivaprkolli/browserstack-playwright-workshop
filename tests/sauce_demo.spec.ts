import {test, expect} from '@playwright/test';
//import {test} from '../fixtures/login.fixture';

test('Sauce demo test cart @test_setup', async ({page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});
