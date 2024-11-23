import test, { expect } from "@playwright/test";

// test('testing tests', function(){})
test("testing tests", () => {
  expect(1 + 4).toBe(5); // Assertion: Red first
  expect(1 + 2).not.toBe(5); // Assertion: Red first
  expect("banana").toBe("banana"); // Assertion: Red first
  expect({ placki: 123 }).toEqual({ placki: 123 });
});

test("testujemy strone", async ({ page }) => {

  // await Promise ...
  await page.goto("https://playwright.dev/");

  // Locator is not a promise.  Locator is a Recipe!
  page.getByText("get started");

  // Promise of a Value = visible - true
  const titleIsVisible = await page.getByText("get started").isVisible();

  // Expectation of async is itself async
  await expect(page.getByText("get started")).toBeVisible()
});
