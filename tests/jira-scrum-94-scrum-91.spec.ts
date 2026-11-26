import { test, expect } from '@playwright/test';
import { JiraScrum94Scrum91Page } from '../pages/jira-scrum-94-scrum-91.page';
import data from '../data/jira-scrum-94-scrum-91.data.json';

type TestCaseData = {
  fullName?: string;
  email?: string;
  currentAddress?: string;
};

const typedData = data as Record<string, TestCaseData>;

const runTest = (testId: string) => {
  test(testId, async ({ page }) => {
    const caseData = typedData[testId] ?? {};
    const jiraPage = new JiraScrum94Scrum91Page(page);

    await jiraPage.navigate();
    await jiraPage.enterFullName(caseData.fullName ?? '');
    await jiraPage.enterEmail(caseData.email ?? '');
    await jiraPage.enterCurrentAddress(caseData.currentAddress ?? '');
    await jiraPage.clickSubmitButton();

    if (testId === 'SCRUM-94') {
      await expect(page.locator('#output')).toBeVisible();
    } else {
      await expect(page.locator('#submit')).toBeVisible();
    }
  });
};

runTest('SCRUM-94');
runTest('SCRUM-91');