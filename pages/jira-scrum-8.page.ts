import { Page, Locator } from '@playwright/test';

export class JiraScrum8Page {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#email-input');
    this.submitButton = page.locator('#submit-button');
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }
}
