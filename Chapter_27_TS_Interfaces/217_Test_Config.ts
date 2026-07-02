interface TestConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;
}
// Create a configuration for CI environment
let ciConfig: TestConfig = {
    browser: "Chrome",
    headless: true,
    baseURL: "https://staging.app.com"
};

// Create a configuration for local development
let localConfig: TestConfig = {
    browser: "Firefox",
    headless: false,
    baseURL: "http://localhost:3000",
    timeout: 10000,
    retries: 3
};
// Log the configurations

console.log("CI:", ciConfig.browser, "| timeout:", ciConfig.timeout);
console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout);