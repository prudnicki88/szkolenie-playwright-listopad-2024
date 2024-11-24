import test from "@playwright/test";

test("API Login test", async ({ request }) => {
  const response = await request.get("http://localhost:3000/api/token", {
    params: {},
  });

  
});
