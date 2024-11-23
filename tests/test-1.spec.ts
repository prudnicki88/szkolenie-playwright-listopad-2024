import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Recording...
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("heading", { name: "Playwright enables reliable" })
  ).toBeVisible();

  await page.getByRole("link", { name: "Get started" }).click();

  await expect(page.locator("h1")).toContainText("Installation");

  await expect(page.locator("#introduction")).toContainText("Introduction");
});

test("npm command is correct", async ({ page }) => {
  // Recording...
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();

  page.locator("css=.tabs-container");
  page.locator("css=#running-the-example-test");
  page.getByText("Running the Example Test");


  // Error: strict mode violation: locator('.tabs-container') resolved to 6 elements
  // await expect(page.locator("css=.tabs-container")).toBeVisible();
  
  await expect(page.locator("css=.tabs-container").first()).toBeVisible()
  await expect(page.locator("css=.tabs-container").nth(2)).toBeVisible()
  await expect(page.locator("css=.tabs-container")).toHaveCount(6)
  await expect(
    page
      .locator("css=.tabs-container")
      .filter({ hasText: "npm init playwright@latest" })
  ).toBeVisible();
});
