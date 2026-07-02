
// Function that takes a string and logs it to the console
function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}
// Function that never returns (infinite loop)
function infiniteLoop(): never {
    while (true) { }
}