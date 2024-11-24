import test, { expect } from "@playwright/test";

test("API Login test", async ({ request }) => {
  const response = await request.get("http://localhost:3000/todos.json", {
    params: {},
  });

  expect(await response.json()).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: expect.any(String),
        completed: expect.any(Boolean),
      }),
    ])
  );
});
