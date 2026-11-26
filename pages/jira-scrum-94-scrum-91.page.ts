import { Page } from '@playwright/test';

export class JiraScrum94Scrum91Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async enterFullName(fullName: string) {
    await this.page.getByPlaceholder('Full Name').fill(fullName);
  }

  async enterEmail(email: string) {
    await this.page.getByPlaceholder('name@example.com').fill(email);
  }

  async enterCurrentAddress(currentAddress: string) {
    await this.page.getByPlaceholder('Current Address').fill(currentAddress);
  }

  async clickSubmitButton() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}