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

test.describe("todos", { tag: ["@todos"] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/todos/");
    const TodoItem = page.getByTestId("todo-item");
    const TodoTitle = page.getByTestId("todo-title");
    const ToggleTodo = page.getByLabel("Toggle Todo");
    const TodoCounter = page.getByTestId("todo-count");
    const TodoDelete = page.getByRole("checkbox", { name: "Delete" });
    const TodoInput = page.getByPlaceholder("What needs to be done?");
  });

  test.describe("Adding todos", () => {
    test("Add one todo", async ({ page }) => {
      const todoText = "Here is my TODO";
      const TodoInput = page.getByPlaceholder("What needs to be done?");

      await TodoInput.fill(todoText);
      await TodoInput.press("Enter");

      const TodoItem = page.getByTestId("todo-item");
      const TodoTitle = page.getByTestId("todo-title");

      const NewTodo = TodoItem.filter({
        has: TodoTitle.getByText(todoText),
      });

      await expect(NewTodo).toBeVisible();
    });

    test.only("Counting new todos", async ({ page }) => {
      const TodoCounter = page.getByTestId("todo-count");
      const TodoInput = page.getByPlaceholder("What needs to be done?");
      const TodoItem = page.getByTestId("todo-item");

      await expect(TodoCounter).toHaveText("3 items left");
      await expect(TodoItem).toHaveCount(3);

      await TodoInput.fill("Here is my TODO");
      await TodoInput.press("Enter");

      await expect(TodoCounter).toHaveText("4 items left");
      await expect(TodoItem).toHaveCount(4);
    });
  });

  test.describe.skip("Filtering todos", () => {
    // test.beforeEach(() => {  /* Add some todos... */  });

    test("Shows all todos", async ({ page }) => {
      // await page.goto('http://localhost:3000/todos/');
    });
  });
});
