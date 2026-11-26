import { Page } from '@playwright/test';

export class JiraScrum77Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/register');
  }

  async setPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async validatePassword() {
    const password = await this.page.getByRole('textbox', { name: 'Password' }).inputValue();
    const passes =
      password.length >= 7 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password);
    return passes ? 'pass' : 'fail';
  }

  async submitForm() {
    await this.page.click('button[type=submit]');
  }

  async isCaptchaPresent() {
    return await this.page.locator('iframe[title*="recaptcha" i], iframe[src*="recaptcha" i]').count() > 0;
  }
}
