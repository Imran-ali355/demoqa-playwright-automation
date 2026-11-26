import { test, expect } from '@playwright/test';
import { JiraScrum8Page } from '../pages/jira-scrum-8.page';
import data from '../data/jira-scrum-8.data.json';

const BASE_URL = 'https://example.com';

for (const { email } of data) {
  test(`[DQA-ELEMENTS-TEXTBOX-004] Handle malformed email-shaped text - ${email}`, async ({ page }) => {
    const jiraScrum8Page = new JiraScrum8Page(page);
    await page.goto('https://demoqa.com/text-box');
    await jiraScrum8Page.enterEmail(email);
    await jiraScrum8Page.submitForm();
    // Add assertions here based on the expected behavior
    // For example:
    // await expect(page.locator('.validation-message')).toHaveText('Invalid email');
  });
}
