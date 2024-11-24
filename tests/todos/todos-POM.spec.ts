import test, { expect } from "@playwright/test";
import { setup } from "./setup";
import { TodosPOM } from "./TodosPOM";

// https://playwright.dev/docs/api/class-test#test-after-each

test.describe("todos", { tag: ["@todos"] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/todos/");
  });

  test.describe("Todo time", () => {
    test("Test clock", async ({ page }) => {
      page.clock.install({ time: new Date("2020-02-10T15:00:00") }); // Before goto!
      await page.goto("http://localhost:3000/todos/");

      page.clock.setFixedTime(new Date("2020-02-10T15:00:00"));
      const Clock = page.getByTestId("clock");

      await expect(Clock).toHaveText(/\d{1,2}:\d{1,2}:\d{1,2} PM/);
      await expect(Clock).toHaveText("3:00:00 PM");
    });
  });

  test.describe("Adding todos", () => {
    test("Add one todo", async ({ page }) => {
      // Arrange - Given...
      const pom = new TodosPOM(page);

      const todoText = "Here is my TODO";
      await pom.addTodo(todoText);

      const NewTodo = pom.getTodoByText(todoText);
      await expect(NewTodo).toBeVisible();
    });

    test("Counting new todos", async ({ page }) => {
      const pom = new TodosPOM(page);

      // Arrange
      await expect(pom.TodoCounter).toHaveText("3 items left");
      await expect(pom.TodoItem).toHaveCount(3);

      // Arrange
      await pom.addTodo("Great todo!");

      // Arrange
      await expect(pom.TodoCounter).toHaveText("4 items left");
      await expect(pom.TodoItem).toHaveCount(4);
    });

    test("Removing todos", async ({ page }) => {
      // Arrange
      const pom = new TodosPOM(page);

      await expect(pom.TodoItem).toHaveCount(3);

      // Act
      const itemPOM = pom.getFirstTodoPOM();
      itemPOM.complete();
      itemPOM.remove();

      // await pom.FirstTodo.hover();
      // await pom.FirstTodo.locator(pom.TodoDelete).click();

      // Assert
      await expect(pom.TodoItem).toHaveCount(2);
    });
  });

  test.describe.only("Completing and Filtering todos", () => {
    // test.beforeEach(() => {  /* Add some todos... */  });

    test("Shows all todos", async ({ page }) => {
      const {
        FirstToggle,
        TodoItem: AllTodoItems,
        CompletedTodoItem,
      } = setup(page);

      await expect(page.getByRole("link", { name: "All" })).toHaveClass(
        /selected/
      );

      await FirstToggle.click(); // Select
      await expect(AllTodoItems).toHaveCount(3);
      await expect(CompletedTodoItem).toHaveCount(1);

      await FirstToggle.click(); // Un-Select
      await expect(AllTodoItems).toHaveCount(3);
      await expect(CompletedTodoItem).toHaveCount(0);
    });

    test("Shows active todos", async ({ page }) => {
      const { FirstToggle, TodoItem, ActiveFilterLink } = setup(page);

      // We have some todos
      await expect(page.getByText("No todos to show")).not.toBeVisible();

      // We complete first
      await FirstToggle.click(); // Select
      await expect(TodoItem).toHaveCount(3);

      await ActiveFilterLink.click();
      await expect(ActiveFilterLink).toHaveClass(/selected/);
      await expect(TodoItem).toHaveCount(2);

      await FirstToggle.click(); // Select
      await expect(TodoItem).toHaveCount(1);

      await FirstToggle.click(); // Select
      await expect(TodoItem).toHaveCount(0);

      await expect(page.getByText("No todos to show")).toBeVisible();
      await expect(page.getByText("no more items left")).toBeVisible();
    });

    test("TODO: Shows completed todos", async ({ page }) => {
      const TodoItem = page.getByTestId("todo-item");
      await expect(TodoItem).toHaveCount(0);
    });

    test("Completing todo", async ({ page }) => {
      const { TodoItem, TodoTitle, ToggleTodo } = setup(page);

      const CheckedTodo = TodoItem.locator(":checked");

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
      await expect(CheckedTodo).toHaveCount(1);

      // text-decoration: line-through
      await expect(SelectedTodo.locator(TodoTitle)).toHaveCSS(
        "text-decoration",
        /line-through/
      );
    });
  });
});
