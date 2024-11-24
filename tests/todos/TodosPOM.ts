import type { Locator, Page } from "@playwright/test";

export class TodoItemPOM {
  constructor(private TodoItem: Locator) {}

  TodoDelete = this.TodoItem.getByRole("button", { name: "Delete" });
  ToggleTodo = this.TodoItem.getByLabel("Toggle Todo");

  hover() {
    return this.TodoItem.hover();
  }

  async complete() {
    await this.ToggleTodo.click();
  }

  async remove() {
    await this.hover();
    await this.TodoDelete.click();
  }
}

export class TodosPOM {
  // page:Page;

  constructor(readonly page: Page) {
    // this.page = page;
  }

  getFirstTodoPOM() {
    return new TodoItemPOM(this.TodoItem.first());
  }

  //   getTodoItem() {
  //     return this.page.getByTestId("todo-item");
  //   }

  getTodoItems(completed = false) {
    return completed
      ? this.TodoItem.locator(":checked")
      : this.TodoInput.locator(":not(:checked)");
  }

  getTodoByText(todoText: string) {
    return this.TodoItem.filter({
      has: this.TodoTitle.getByText(todoText),
    });
  }

  /**
   * Creates New Todo
   * @param {string} text Text [text="Here is my TODO"]
   */
  async addTodo(text: string = "Here is my TODO") {
    await this.TodoInput.fill(text);
    await this.TodoInput.press("Enter");
  }

  TodoInput = this.page.getByPlaceholder("What needs to be done?");

  /**
   * Todo Item List
   *
   * ```ts
   *  await expect(AllTodoItems).toHaveCount(3);
   * ```
   */
  TodoItem = this.page.getByTestId("todo-item");
  TodoTitle = this.page.getByTestId("todo-title");
  TodoCounter = this.page.getByTestId("todo-count");
  TodoDelete = this.page.getByRole("button", { name: "Delete" });
  AllTodoItems = this.page.getByTestId("todo-item");
  ToggleTodo = this.page.getByLabel("Toggle Todo");
  FirstToggle = this.AllTodoItems.first().locator(this.ToggleTodo);
  CompletedTodoItem = this.AllTodoItems.locator(":checked");
  /**
   * Filters todo - not completed only!
   */
  ActiveFilterLink = this.page.getByRole("link", { name: "Active" });
  FirstTodo = this.TodoItem.first();
}
