import {test, expect} from '@playwright/test';
//import {test} from '../fixtures/login.fixture';

test('Sauce demo test inventory @test_setup', async ({page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
