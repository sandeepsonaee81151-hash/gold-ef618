const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('home page shows hero, category cards and featured products', async ({ page }) => {
  await expect(page).toHaveTitle(/Sanjay Jewellery|संजय ज्वैलरी/);
  await expect(page.locator('.hero h1')).toBeVisible();
  await expect(page.locator('.hero .btn')).toHaveCount(2);
  await expect(page.locator('.hero .live-price')).toBeVisible();
  await expect(page.locator('.hero .hero-img')).toHaveCount(0);
  await expect(page.locator('.grid-3 > a.product-card')).toHaveCount(6);
  await expect(page.locator('#featured .product-card')).toHaveCount(4);
});

test('language switch changes the home page to Hindi and back', async ({ page }) => {
  const toggle = page.locator('.topbar button');
  await page.evaluate(() => localStorage.setItem('jk_lang', 'hi'));
  await page.reload();
  await toggle.click();
  await expect(page.locator('.hero h1')).toContainText('Timeless');
  await expect(page.locator('.nav-links')).toContainText('About');
  await toggle.click();
  await expect(page.locator('.hero h1')).toContainText('हर टुकड़े में');
  await expect(page.locator('.nav-links')).toContainText('हमारे बारे में');
});

test('gold calculator updates based on weight and purity', async ({ page }) => {
  await expect(page.locator('#calcResult')).toHaveText('₹66,000');
  await page.locator('#calcPurity').selectOption('18');
  await expect(page.locator('#calcResult')).toHaveText('₹54,000');
  await page.locator('#calcPurity').selectOption('24');
  await expect(page.locator('#calcResult')).toHaveText('₹72,000');
});

test('featured product opens quick view with description and price', async ({ page }) => {
  await page.locator('#featured .product-card h3').first().click();
  await expect(page.locator('.qv-overlay')).toHaveClass(/open/);
  await expect(page.locator('.qv-modal h2')).toBeVisible();
  await expect(page.locator('.qv-desc')).not.toBeEmpty();
  await expect(page.locator('.qv-price')).toContainText('₹45,999');
});

test('shop page offers products and category filter', async ({ page }) => {
  await page.goto('/shop.html');
  await page.evaluate(() => localStorage.setItem('jk_lang', 'hi'));
  await page.reload();
  await expect(page.locator('#grid .product-card')).toHaveCount(12);
  await page.locator('#catFilter').selectOption({ label: 'रिंग्स' });
  await expect(page.locator('#grid .product-card')).toHaveCount(2);
});

test('header has WhatsApp, Instagram and Facebook links', async ({ page }) => {
  await expect(page.locator('.nav-icons a[title="WhatsApp"]')).toHaveAttribute('href', /wa\.me/);
  await expect(page.locator('.nav-icons a[title="Instagram"]')).toBeVisible();
  await expect(page.locator('.nav-icons a[title="Facebook"]')).toBeVisible();
});
