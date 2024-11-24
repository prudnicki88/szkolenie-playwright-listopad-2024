import test, { expect } from "@playwright/test";

test('QR Code', async ({ page }) => {
    await page.goto('https://qaplayground.dev/apps/qr-code-generator/');
   
    await page.getByPlaceholder('Enter text or URL').click();
    await page.getByPlaceholder('Enter text or URL').fill('test');

    await page.getByRole('button', { name: 'Generate QR Code' }).click();
    
    await expect(page.getByRole('img', { name: 'qr-code' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'qr-code' })).toHaveScreenshot({
        maxDiffPixels: 5,
    })
})
