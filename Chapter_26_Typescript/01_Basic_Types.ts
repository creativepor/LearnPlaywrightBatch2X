// TypeScript basic types example

let username: string = "Poulomi";
let age: number = 38;
let isActive: boolean = true;

// Function that takes a string and returns a greeting message

function greet(name: string): string {
    return `Hello, ${name}!`;
}
// Using the function and logging the results

console.log(greet(username));
console.log("Age:", age);
console.log("Active:", isActive);
