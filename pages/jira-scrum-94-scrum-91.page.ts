import { Page } from '@playwright/test';

export class JiraScrum94Scrum91Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://example.com/text-box');
  }

  async enterFullName(fullName: string) {
    await this.page.fill('input[name="fullName"]', fullName);
  }

  async enterEmail(email: string) {
    await this.page.fill('input[name="email"]', email);
  }

  async enterCurrentAddress(currentAddress: string) {
    await this.page.fill('input[name="currentAddress"]', currentAddress);
  }

  async clickSubmitButton() {
    await this.page.click('button[type="submit"]');
  }
}