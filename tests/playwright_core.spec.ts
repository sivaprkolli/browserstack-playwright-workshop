import {test, expect, chromium, Locator} from '@playwright/test';

test("Core Playwright test @core", async() => {
    const browser = await chromium.launch({headless: false}); //real browser
    const context = await browser.newContext(); //new incognito browser session
    const page = await context.newPage(); //creates new tab in the browser session

    await page.goto("https://saucedemo.com/");

    const usernameInputBox: Locator = page.locator("#user-name"); // to find the element
    //await page.locator("#user-name").fill("standard_user");
    await usernameInputBox.fill("standard_user"); 
    await browser.close();
    
})