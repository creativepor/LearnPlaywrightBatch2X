// Simple program to list JavaScript Identifier Rules

const identifierRules = [
    "Identifiers must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($).",
    "Subsequent characters can include letters, digits (0-9), underscores, or dollar signs.",
    "Identifiers cannot be JavaScript reserved keywords.",
    "Identifiers are case-sensitive (e.g., 'myVar' and 'myvar' are different).",
    "Identifiers cannot contain spaces or special characters other than underscores and dollar signs.",
    "Identifiers can be of any length, but should be meaningful and follow conventions."
];

console.log("JavaScript Identifier Rules:");
identifierRules.forEach((rule, index) => console.log(`${index + 1}. ${rule}`));

console.log("\nValid Identifiers:");
console.log("- myVariable");
console.log("- _privateVar");
console.log("- $price");
console.log("- user123");
console.log("- camelCaseExample");
console.log("- MAX_LENGTH");

console.log("\nInvalid Identifiers:");
console.log("- 123abc (cannot start with a digit)");
console.log("- my-var (contains hyphen)");
console.log("- let (reserved keyword)");
console.log("- my var (contains space)");
console.log("- @symbol (starts with invalid character)");
console.log("- var (reserved keyword)");