import { test, expect } from '@playwright/test';
import { JiraScrum91Page } from '../pages/jira-scrum-91.page';
import testData from '../data/jira-scrum-91.data.json';

for (const data of testData) {
  test(data.title, async ({ page }) => {
    const jiraPage = new JiraScrum91Page(page);
    await jiraPage.navigate();
    page.once('dialog', dialog => dialog.accept());
    await jiraPage.clickBugButton();
    await jiraPage.verifyBugSubmission();
  });
}