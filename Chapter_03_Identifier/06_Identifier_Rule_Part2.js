// Simple program to list different types of identifier naming conventions

const namingConventions = [
    {
        name: "camelCase",
        description: "First word lowercase, subsequent words capitalized (e.g., myVariableName).",
        example: "userName, getUserData"
    },
    {
        name: "PascalCase",
        description: "All words capitalized (e.g., MyVariableName).",
        example: "UserName, GetUserData"
    },
    {
        name: "snake_case",
        description: "Words separated by underscores, all lowercase (e.g., my_variable_name).",
        example: "user_name, get_user_data"
    },
    {
        name: "SCREAMING_SNAKE_CASE",
        description: "Words separated by underscores, all uppercase (e.g., MY_VARIABLE_NAME).",
        example: "MAX_LENGTH, API_KEY"
    },
    {
        name: "kebab-case",
        description: "Words separated by hyphens, all lowercase (e.g., my-variable-name).",
        example: "user-name, get-user-data"
    },
    {
        name: "flatcase",
        description: "All lowercase, no separators (e.g., myvariablename).",
        example: "username, getuserdata"
    },
    {
        name: "UPPERFLATCASE",
        description: "All uppercase, no separators (e.g., MYVARIABLENAME).",
        example: "USERNAME, GETUSERDATA"
    },
    {
        name: "Hungarian notation",
        description: "Prefixes indicate data type (e.g., strName for string, iCount for integer).",
        example: "strUserName, iAge, bIsActive"
    },
    {
        name: "train-case",
        description: "Words separated by hyphens, first letter of each word capitalized (e.g., Train-Case).",
        example: "User-Name, Get-User-Data"
    }
];

console.log("Common Identifier Naming Conventions:");
namingConventions.forEach(convention => {
    console.log(`\n${convention.name}:`);
    console.log(`  Description: ${convention.description}`);
    console.log(`  Example: ${convention.example}`);
});

console.log("\nExamples of Literals with Naming Conventions:");
console.log("camelCase: let userAge = 25; // number literal");
console.log("PascalCase: const UserName = 'Alice'; // string literal");
console.log("snake_case: let is_active = true; // boolean literal");
console.log("SCREAMING_SNAKE_CASE: const MAX_VALUE = 100; // number literal");
console.log("kebab-case: // Not valid in JS (hyphens not allowed in identifiers)");
console.log("flatcase: let price = 99.89; // number literal");
console.log("UPPERFLATCASE: const APIURL = 'https://api.example.com'; // string literal");
console.log("Hungarian notation: let strName = 'John'; // string literal with type prefix");
console.log("train-case: // Not valid in JS (hyphens not allowed in identifiers)");