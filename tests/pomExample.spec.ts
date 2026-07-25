import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test("Login test using Page Object Model @pom", async ({ page }) => {
    let loginPage = new LoginPage(page);
    await page.goto("/");
    await loginPage.login("standard_user", "secret_sauce");

});