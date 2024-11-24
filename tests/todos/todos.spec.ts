import test, { expect } from "@playwright/test";

// https://playwright.dev/docs/api/class-test#test-after-each

// test.beforeAll(async ({page})=>{ }) // !
// test.afterEach(() => {});

/* 
    Todos:
     - Adding 
     - Completing
     - Counter
     - Removing
     - Filtering
     - Dates
*/

test.describe("todos", { tag: ["todos"] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/todos/");
    const TodoItem = page.getByTestId("todo-item");
    const ToggleTodo = page.getByLabel("Toggle Todo");
    const TodoCounter = page.getByTestId("todo-count");
    const TodoTitle = page.getByTestId("todo-title");
    const TodoDelete = page.getByRole("checkbox", { name: "Delete" });
    const TodoInput = page.getByPlaceholder("What needs to be done?");
  });

  test.describe("Adding todos", () => {
    test("Add one todo", async ({ page }) => {
      const todo = "Here is my TODO";
      const TodoInput = page.getByPlaceholder("What needs to be done?");

      TodoInput.fill(todo);
      TodoInput.press("Enter");
    });

    test("Counting new todos", async ({ page }) => {
      const TodoCounter = page.getByTestId("todo-count");
      expect(TodoCounter).toHaveText("3 items left");

      //   await expect().toBeVisible();
    });
  });

  test.describe.skip("Filtering todos", () => {
    // test.beforeEach(() => {  /* Add some todos... */  });

    test("Shows all todos", async ({ page }) => {
      // await page.goto('http://localhost:3000/todos/');
    });
  });
});
