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
      // Arrange - Given...
      const todoText = "Here is my TODO";
      const TodoInput = page.getByPlaceholder("What needs to be done?");
      const TodoItem = page.getByTestId("todo-item");
      const TodoTitle = page.getByTestId("todo-title");

      // Act  - When...
      await TodoInput.fill(todoText);
      await TodoInput.press("Enter");

      // Assert  - Then...
      const NewTodo = TodoItem.filter({
        has: TodoTitle.getByText(todoText),
      });
      await expect(NewTodo).toBeVisible();
    });

    test("Counting new todos", async ({ page }) => {
      const TodoCounter = page.getByTestId("todo-count");
      const TodoInput = page.getByPlaceholder("What needs to be done?");
      const TodoItem = page.getByTestId("todo-item");

      // Arrange
      await expect(TodoCounter).toHaveText("3 items left");
      await expect(TodoItem).toHaveCount(3);

      // Arrange
      await TodoInput.fill("Here is my TODO");
      await TodoInput.press("Enter");

      // Arrange
      await expect(TodoCounter).toHaveText("4 items left");
      await expect(TodoItem).toHaveCount(4);
    });

    test("Removing todos", async ({ page }) => {
      // Arrange
      const TodoItem = page.getByTestId("todo-item");
      const TodoDelete = page.getByRole("button", { name: "Delete" });
      const TodoCounter = page.getByTestId("todo-count");
      const SelectedTodo = TodoItem.first();
      await expect(TodoItem).toHaveCount(3);

      // Act
      await SelectedTodo.hover();
      await SelectedTodo.locator(TodoDelete).click();

      // Assert
      await expect(TodoItem).toHaveCount(2);
    });
  });

  test.describe.only("Completing and Filtering todos", () => {
    // test.beforeEach(() => {  /* Add some todos... */  });

    test("Shows all todos", async ({ page }) => {
      const TodoItem = page.getByTestId("todo-item");
      await expect(TodoItem).toHaveCount(3);
    });

    test("Completing todo", async ({ page }) => {
      const TodoItem = page.getByTestId("todo-item");
      const TodoTitle = page.getByTestId("todo-title");
      const ToggleTodo = page.getByLabel("Toggle Todo");

      const CheckedTodo = TodoItem.filter({
        has: ToggleTodo.locator(":checked"),
      });
      // Arrange
      const BananaTodo = TodoTitle.getByText("banana");
      const SelectedTodo = TodoItem.filter({
        has: BananaTodo,
      });
      await expect(CheckedTodo).toHaveCount(0);

      // Act
      await SelectedTodo.locator(ToggleTodo).click();

      // Assert
      // .completed
      // await expect(SelectedTodo.getAttribute('class')).toMatch("completed");
      await expect(SelectedTodo).toHaveClass(/completed/);

      // :checked
      await expect(SelectedTodo.locator(ToggleTodo)).toBeChecked();
      // await expect(CheckedTodo).toHaveCount(1)

      // text-decoration: line-through
      await expect(SelectedTodo.locator(TodoTitle)).toHaveCSS("text-decoration", /line-through/);
    });
  });
});
