// Chapter 20: Playwright Basics

// This file shows simple Playwright usage in Node.js.
// Make sure Playwright is installed before running: npm install -D @playwright/test

const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://example.com');
    console.log('Page title:', await page.title());

    const heading = await page.textContent('h1');
    console.log('Main heading:', heading.trim());

    await browser.close();
})();
