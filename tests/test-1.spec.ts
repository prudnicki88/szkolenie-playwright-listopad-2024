import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.getByLabel("Search").click();
  await page.getByPlaceholder("Search docs").click();
  await page.getByPlaceholder("Search docs").fill("actions ");

  await page.getByRole("link", { name: "Actions", exact: true }).click();

  // redirect
  await expect(page).toHaveURL(/docs\/input/);

  await expect(page.locator("h1")).toContainText("Actions");
});
