import {test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Read the CSV file and parse it into an array of objects
const csvFilePath = path.resolve(process.cwd(), 'data', 'sauce_demo_login_data.csv');

let csvData = '';
try {
    // Read the CSV file synchronously
    csvData = fs.readFileSync(csvFilePath, 'utf-8');

}
// Handle any errors that occur while reading the CSV file
catch (err) {
    throw new Error(`Could not read CSV file at ${csvFilePath}: ${err}`);
}
// Parse the CSV data into an array of objects
const testData = parse(csvData, { columns: true, skip_empty_lines: true }) as Array<{ username: string; password: string; expected_result: string }>;


// Define a test suite for Sauce Demo Login Tests

test.describe('Sauce Demo Login Tests', () => {
    for (const { username, password, expected_result } of testData) {
        test(`Login Test with username: ${username} and password: ${password}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('[data-test="username"]').click();   

            await page.locator('[data-test="username"]').fill(username);
            await page.locator('[data-test="password"]').click();
            await page.locator('[data-test="password"]').fill(password);
            await page.locator('[data-test="login-button"]').click();   
            // determine assertion based on the expected outcome from CSV
                // assertion for error messages provided in CSV
            if (expected_result && expected_result.startsWith('http')) {
                await expect(page).toHaveURL(expected_result);
                await expect(page.locator('.title')).toHaveText('Products');
            } else {
                // assertion for error messages provided in CSV
                await expect(page.locator('[data-test="error"]')).toBeVisible();
                await expect(page.locator('[data-test="error"]')).toContainText(expected_result);
            }

        });
    }

});


