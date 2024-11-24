import type { Page } from "@playwright/test";

export function setup(page: Page) {
  const TodoInput = page.getByPlaceholder("What needs to be done?");
  const TodoItem = page.getByTestId("todo-item");
  const TodoTitle = page.getByTestId("todo-title");
  const TodoCounter = page.getByTestId("todo-count");
  const TodoDelete = page.getByRole("button", { name: "Delete" });
  const AllTodoItems = page.getByTestId("todo-item");
  const ToggleTodo = page.getByLabel("Toggle Todo");
  const FirstToggle = AllTodoItems.first().locator(ToggleTodo);
  const CompletedTodoItem = AllTodoItems.locator(":checked");
  const ActiveFilterLink = page.getByRole("link", { name: "Active" });
  const FirstTodo = TodoItem.first();

  /**
   * Creates New Todo
   * @param {string} text Text [text="Here is my TODO"] 
   */
  async function addTodo(text: string = "Here is my TODO") {
    await TodoInput.fill(text);
    await TodoInput.press("Enter");
  }

  return {
    addTodo,

    /**
     * Todo Item List
     *
     * ```ts
     *  await expect(AllTodoItems).toHaveCount(3);
     * ```
     */
    TodoItem,
    FirstToggle,
    CompletedTodoItem,
    TodoInput,
    TodoTitle,
    TodoDelete,
    /**
     * Filters todo - not completed only!
     */
    ActiveFilterLink,
    TodoCounter,
    FirstTodo,
    ToggleTodo,
  };
}
