import test, { expect } from "@playwright/test";

// pw-test
test("Test page header", async ({ page }) => {
  // pwgoto
  await page.goto("https://playwright.dev/");

// CSS exact selector - fragile!
// await page.$('#__docusaurus_skipToContent_fallback > header > div > h1');


// Web-First / User-Centric 

await expect(page.getByRole('heading'))
            .toHaveText('Playwright enables reliable');

// Future-Proof
await expect(page.getByRole('heading', { name: 'Playwright enables reliable' }))
            .toBeVisible()

});
