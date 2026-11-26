import { test, expect } from '@playwright/test';
import { JiraScrum94Scrum91Page } from '../pages/jira-scrum-94-scrum-91.page';
import data from '../data/jira-scrum-94-scrum-91.data.json';

const { SCRUM_94, SCRUM_91 } = data;

const runTest = async (testId: string, fullName: string, email: string, currentAddress: string) => {
  test(testId, async ({ page }) => {
    const jiraPage = new JiraScrum94Scrum91Page(page);
    await jiraPage.navigate();
    await jiraPage.enterFullName(fullName);
    await jiraPage.enterEmail(email);
    await jiraPage.enterCurrentAddress(currentAddress);
    await jiraPage.clickSubmitButton();
    // Add assertions here based on the expected result
  });
};

runTest('SCRUM-94', SCRUM_94.fullName, SCRUM_94.email, SCRUM_94.currentAddress);
runTest('SCRUM-91', SCRUM_91.fullName, SCRUM_91.email, SCRUM_91.currentAddress);