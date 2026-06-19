// Chapter 17: Callback Functions

// 1. Basic callback example
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// 2. Callback with data
function fetchData(callback) {
    const data = { id: 1, title: "Callback Example" };
    callback(data);
}

fetchData(function (result) {
    console.log("Fetched data:", result);
});

// 3. Callback for array iteration
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    console.log("Number:", num);
});

// 4. Callback to process values
function processValues(values, callback) {
    const processed = values.map(value => callback(value));
    return processed;
}

const squared = processValues([1, 2, 3], function (value) {
    return value * value;
});

console.log("Squared:", squared);

// 5. Simulate asynchronous callback with setTimeout
function delayMessage(message, callback) {
    setTimeout(function () {
        callback(message);
    }, 500);
}

delayMessage("This is delayed.", function (msg) {
    console.log(msg);
});