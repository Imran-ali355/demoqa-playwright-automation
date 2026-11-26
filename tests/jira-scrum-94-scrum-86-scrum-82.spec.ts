import { test, expect } from '@playwright/test';
import { JiraScrumPage } from '../pages/jira-scrum-94-scrum-86-scrum-82.page';
import data from '../data/jira-scrum-94-scrum-86-scrum-82.data.json';

const baseUrl = 'https://example.com';

for (const testCase of Object.values(data)) {
  test(testCase.id, async ({ page }) => {
    await page.goto(baseUrl);

    if (testCase.id === 'SCRUM-94') {
      const jiraPage = new JiraScrumPage(page);
      await jiraPage.submitForm(testCase.fullName, testCase.email, testCase.currentAddress);
      // Add assertions for expected results
    } else if (testCase.id === 'SCRUM-86') {
      const jiraPage = new JiraScrumPage(page);
      await jiraPage.login(testCase.username, testCase.password);
      // Add assertions for expected results
    } else if (testCase.id === 'SCRUM-82') {
      // Add API test code here
    }
  });
}