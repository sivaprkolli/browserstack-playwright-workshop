import {expect} from '@playwright/test';
import {test} from '../fixtures/login.fixture';

test('Sauce demo test @fixture', async ({loginAction }) => {
  await expect(loginAction).toHaveURL('https://www.saucedemo.com/inventory.html');
});