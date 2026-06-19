// Chapter 19: Async/Await

// 1. Create a function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, title: "Async/Await Example" };
            resolve(data);
        }, 300);
    });
}

// 2. Use async/await to consume the promise
async function getData() {
    try {
        const result = await fetchData();
        console.log("Data received:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();

// 3. Async function returning a value
async function greet(name) {
    return `Hello, ${name}!`;
}

greet("Bob").then(message => console.log(message));

// 4. Await multiple promises with Promise.all
async function getMultiple() {
    const promise1 = Promise.resolve("first");
    const promise2 = Promise.resolve("second");
    const values = await Promise.all([promise1, promise2]);
    console.log("All values:", values);
}

getMultiple();

// 5. Using await with a rejected promise
async function handleError() {
    try {
        const badPromise = Promise.reject("Failure");
        await badPromise;
    } catch (err) {
        console.error("Caught error:", err);
    }
}

handleError();