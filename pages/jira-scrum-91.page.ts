import { expect, Page, Locator } from '@playwright/test';

export class JiraScrum91Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://demoqa.com/alerts');
  }

  async clickBugButton(): Promise<void> {
    await this.page.locator('#alertButton').scrollIntoViewIfNeeded();
    await this.page.click('#alertButton');
  }

  async verifyBugSubmission(): Promise<void> {
    await expect(this.page.locator('#alertButton')).toBeVisible();
  }
}