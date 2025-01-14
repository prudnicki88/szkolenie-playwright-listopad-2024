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

test("Tabs by header", async ({ page }) => {
  // Recording...
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();

  page.locator("css=.tabs-container");
  page.getByText("Running the Example Test");

  // Find Parent by child
  const SectionByHeader = page.locator(
    ".section:has(#running-the-example-test)"
  );

  // page.locator(':below(#running-the-example-test)') // x < .
  // page.locator(':below(#running-the-example-test):above(#html-test-reports)') 
  page.locator('.tabs-container:below(#running-the-example-test)').first()

  // Sibling
  const Header = page.locator("css=#running-the-example-test");
  const TabsFollowingHeader = Header.locator("~ .tabs-container");

  await expect(TabsFollowingHeader.first()).toBeVisible();
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

  await expect(page.locator("css=.tabs-container").first()).toBeVisible();
  await expect(page.locator("css=.tabs-container").nth(2)).toBeVisible();
  await expect(page.locator("css=.tabs-container")).toHaveCount(6);
  await expect(
    page
      .locator("css=.tabs-container")
      .filter({ hasText: "npm init playwright@latest" })
  ).toBeVisible();

  const FirstContainer = page.locator("css=.tabs-container").first();
  const Tabs = FirstContainer.locator("css=ul.tabs").getByRole("tab");
  const NpmTab = FirstContainer.locator("css=ul.tabs")
    .getByRole("tab")
    .getByText("npm");

  // await expect(Tabs).toHaveText(['npm','yarn','banana'])
  await expect(Tabs).toHaveText(["npm", "yarn", "pnpm"]);
});
