import { Page } from '@playwright/test';

export class JiraScrum77Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://example.com/register');
  }

  async setPassword(password: string) {
    await this.page.fill('input[name=password]', password);
  }

  async validatePassword() {
    const validationMessage = await this.page.textContent('div.password-validation');
    return validationMessage;
  }
}