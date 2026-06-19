// Chapter: Promise

// 1. Create a promise
const promiseExample = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 300);
});

// 2. Use .then and .catch
promiseExample
    .then(result => {
        console.log(result);
        return "Next step";
    })
    .then(next => {
        console.log(next);
    })
    .catch(error => {
        console.error(error);
    });

// 3. Promise.resolve and Promise.reject
const resolvedPromise = Promise.resolve("Immediate resolve");
const rejectedPromise = Promise.reject("Immediate reject");

resolvedPromise.then(value => console.log(value));
rejectedPromise.catch(error => console.error(error));

// 4. Promise.all example
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("Promise.all values:", values);
    })
    .catch(error => {
        console.error("Promise.all error:", error);
    });

// 5. Promise.race example
const fastPromise = new Promise(resolve => setTimeout(() => resolve("fast"), 100));
const slowPromise = new Promise(resolve => setTimeout(() => resolve("slow"), 300));

Promise.race([fastPromise, slowPromise])
    .then(winner => console.log("Promise.race winner:", winner));