import test from "@playwright/test";

// https://playwright.dev/docs/api/class-test#test-after-each

// test.beforeAll(async ({page})=>{ }) // !
// test.afterEach(() => {});

test.describe("todos", { tag: ["todos"] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/todos/");
  });

  test.describe("Adding todos", () => {
    test.only("Add one todo", async ({ page }) => {
      // await page.goto('http://localhost:3000/todos/');
    });
  });

  test.describe.skip("Filtering todos", () => {
    // test.beforeEach(() => {  /* Add some todos... */  });

    test("Shows all todos", async ({ page }) => {
      // await page.goto('http://localhost:3000/todos/');
    });
  });
});
