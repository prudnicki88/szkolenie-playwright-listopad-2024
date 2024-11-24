import test, { expect } from "@playwright/test";

test("Komunikat matching Header", async ({ page }) => {
  await page.goto("http://localhost:3000/examples");

  // page.getByRole('heading',{name:/Header \d+/})
  // page.getByRole('heading',{name:'Header', exact:false})

  const Headers = page.getByRole("heading", { name: "Header" });

  const Parents = page.locator(".parent");

  const Komunikat = Parents.filter({
    has: Headers.filter({ hasText: "Header 1" }),
  }).getByText("Komunikat 1");

  await expect(Komunikat).toBeVisible();
});

test("Test all Komuniats - Regexp match", async ({ page }) => {
  const Parents = page.locator(".parent");
  const ParentLocators = await Parents.all();
  const count = await Parents.count();

  for (const Parent of ParentLocators) {
    const Header = Parent.getByRole("heading", { name: "Header" });
    const headerText = await Header.textContent();
    const id = headerText?.match(/Header (.+)/)?.[0];
    await expect(Parent.getByText(`Komunikat ${id}`)).toBeVisible();
  }
});
