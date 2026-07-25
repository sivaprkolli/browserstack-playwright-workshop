import { Page } from '@playwright/test';

export class LoginPage {
    private myPage: Page;
    constructor(myPage: Page) {
        this.myPage = myPage;
    }

    private usernameInput = 'input[placeholder="Username"]';
    private passwordInput = 'input[placeholder="Password"]';
    private loginButton = '[data-test="login-button"]';

    async login(username: string, password: string) {
        await this.myPage.fill(this.usernameInput, username);
        await 
        await this.myPage.fill(this.passwordInput, password);
        await this.myPage.click(this.loginButton);
    }

}

