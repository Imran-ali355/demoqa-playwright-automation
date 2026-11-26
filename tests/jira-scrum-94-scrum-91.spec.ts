import { test } from '@playwright/test';
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
  });
};

runTest('SCRUM-94');
runTest('SCRUM-91');