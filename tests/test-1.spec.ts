import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const SearchBox = page.getByPlaceholder("Search docs");

  await page.getByLabel("Search").click();
  await SearchBox.click();
  await SearchBox.fill("actions ");

  await page.getByRole("link", { name: "Actions", exact: true }).click();

  // redirect
  await expect(page).toHaveURL(/docs\/input/);

  await expect(page.locator("h1")).toContainText("Actions");
});

test("Keyboard shortcuts", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const SearchBox = page.getByPlaceholder("Search docs");

  await page.locator("body").press("Control+K");
  await SearchBox.pressSequentially("Actions", { delay: 500 });

  // await expect(SearchBox).toHaveValue('Actions')
  const value = await SearchBox.inputValue();
  if (!value) {
    await SearchBox.pressSequentially("Actions", { delay: 500 });
  }

  await SearchBox.press("Enter");
});
