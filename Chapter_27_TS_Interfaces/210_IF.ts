// Define an interface for a test case

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}
//Create an object that adheres to the TestCase interface

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
}

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);

// Create another test case object
let test2: TestCase = {
    id: 2,
    name: "Login with invalid password",
    status: "FAIL",
    duration: 3200
};

// Log the details of the second test case
console.log("TC-" + test2.id + ": " + test2.name + " → " + test2.status);

// let test3: TestCase = {
//     id: 1,
//     name: "Login with valid credentials",
//     status: "PASS",
// };