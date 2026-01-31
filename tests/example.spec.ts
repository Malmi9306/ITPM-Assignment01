import { test } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea');

  await singlishInput.fill('mama campus yanavaa');

  await page.waitForTimeout(1000);
});



test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea');

  await singlishInput.fill('mama campus giyaa but lectures miss unaa');

  await page.waitForTimeout(1000);
});

