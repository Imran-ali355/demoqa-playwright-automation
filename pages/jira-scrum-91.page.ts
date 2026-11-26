import { Page, Locator } from '@playwright/test';

export class JiraScrum91Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://example.com');
  }

  async clickBugButton(): Promise<void> {
    await this.page.click('button[data-testid="bug-button"]');
  }

  async verifyBugSubmission(): Promise<void> {
    await expect(this.page.locator('div[data-testid="bug-submitted"]')).toBeVisible();
  }
}