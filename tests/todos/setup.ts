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

  return {
    TodoInput,
    TodoItem,
    TodoTitle,
    TodoCounter,
    TodoDelete,
    FirstToggle,
    CompletedTodoItem,
    ActiveFilterLink,
    FirstTodo,
  };
}
