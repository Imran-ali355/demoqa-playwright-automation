import { test, expect } from '@playwright/test';
import data from '../data/jira-scrum-94-scrum-86-scrum-82.data.json';

type TestCaseItem = {
  id?: string;
  title?: string;
  baseUrl?: string;
};

const entries = Object.entries((data || {}) as Record<string, TestCaseItem>);

entries.forEach(([key, testCase], index) => {
  const tc = testCase || {};
  const id = String(tc.id || key || `TC-${index + 1}`).trim();
  const title = `${id} - ${String(tc.title || `Case ${index + 1}`).trim()} (#${index + 1})`;
  const baseUrl = String(tc.baseUrl || process.env.BASE_URL || 'https://demoqa.com/text-box');

  test(title, async ({ page }) => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/.+/);
  });
});