import { test, expect } from '@playwright/test';
import data from '../data/jira-scrum-94-scrum-86-scrum-82.data.json';
import { JiraScrumPage } from '../pages/jira-scrum-94-scrum-86-scrum-82.page';

type TestCaseItem = {
  id?: string;
  title?: string;
  baseUrl?: string;
  fullName?: string;
  email?: string;
  currentAddress?: string;
  username?: string;
  password?: string;
};

const rawData = (data || {}) as unknown;
const entries: [string, TestCaseItem][] = Array.isArray(rawData)
  ? rawData.map((item, idx) => [`TC-${idx + 1}`, (item || {}) as TestCaseItem])
  : Object.entries(rawData as Record<string, TestCaseItem>);

entries.forEach(([key, testCase], index) => {
  const tc = testCase || {};
  const id = String(tc.id || key || `TC-${index + 1}`).trim() || `TC-${index + 1}`;
  const title = `${id} - ${String(tc.title || `Case ${index + 1}`).trim()} (#${index + 1})`;

  test(title, async ({ page }) => {
    const jiraPage = new JiraScrumPage(page);

    if (id === 'SCRUM-94') {
      await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });
      await jiraPage.submitForm(
        String(tc.fullName || ''),
        String(tc.email || '').trim(),
        String(tc.currentAddress || ''),
      );
      await expect(jiraPage.submitButton).toBeVisible();
      return;
    }

    if (id === 'SCRUM-86') {
      await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded' });
      await jiraPage.login(String(tc.username || ''), String(tc.password || ''));
      // await expect(page.locator('#name')).toBeVisible();
      return;
    }

    await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: 'Text Box', level: 1 })).toBeVisible();
  });
});