import { Page, Locator } from '@playwright/test';

export class JiraScrumPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = page.getByPlaceholder('Full Name');
    this.emailInput = page.getByPlaceholder('name@example.com');
    this.currentAddressInput = page.getByPlaceholder('Current Address');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.usernameInput = page.getByRole('textbox', { name: 'UserName' });
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async submitForm(fullName: string, email: string, currentAddress: string): Promise<void> {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddress);
    await this.submitButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}