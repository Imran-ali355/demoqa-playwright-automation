import { test, expect } from '@playwright/test';
import { JiraScrum77Page } from '../pages/jira-scrum-77.page';
import data from '../data/jira-scrum-77.data.json';

const { testCases } = data;

for (const testCase of testCases) {
  test(testCase.title, async ({ page }) => {
    const jiraPage = new JiraScrum77Page(page);

    await jiraPage.goto();

    for (const { password, expected } of testCase.data) {
      await jiraPage.setPassword(password);
      expect(await jiraPage.validatePassword()).toBe(expected);

      expect(await jiraPage.isCaptchaPresent()).toBeFalsy();
    }
  });
}
