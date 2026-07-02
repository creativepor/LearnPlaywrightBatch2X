// Build a URL endpoint from a base URL and a path

function buildEndpoint(base: string, path: string): string {
    return base + path;
}
// Check if a status code indicates success (2xx)
function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}
// Log a test step with a specific format
function logTestStep(step: string): void {
    console.log("[STEP] " + step);
}
// Example usage of the functions
console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isSuccessCode(200));
console.log("404 is success:", isSuccessCode(404));
logTestStep("Navigate to login page");