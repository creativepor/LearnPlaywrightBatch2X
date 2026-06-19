// 124_Object_Basics.js

// Create an object using object literal syntax
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

console.log(person);
console.log("Name:", person.firstName, person.lastName);
console.log("Age:", person.age);

// Create an empty object and add properties later
const book = {};
book.title = "JavaScript Basics";
book.author = "Jane Smith";
console.log(book);
