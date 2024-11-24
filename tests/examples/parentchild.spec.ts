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
  await page.goto("http://localhost:3000/examples");

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

test("Test with Fixure", async ({ page }) => {
  await page.goto("http://localhost:3000/examples");

  const productsFixture = createProductsFixture();

  for (const product of productsFixture) {
    const Header = page.getByRole("heading", { name: product.header });
    const Parent = page.locator(".parent").filter({ has: Header });
    await expect.soft(Parent.getByText(product.message)).toBeVisible();
  }
});

function createProductsFixture() {
  const productsFixture = [
    { header: "Header 1", message: "Komunikat 1123" },
    { header: "Header 2", message: "Komunikat 2" },
  ];

  return productsFixture;
}

function addProducts(){
    // fill form...
    // add product...
}
