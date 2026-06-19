// 127_Object_Constructors.js

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

const person1 = new Person("Sara", "Khan", 28);
const person2 = new Person("Amir", "Ali", 35);

console.log(person1.fullName(), person1.age);
console.log(person2.fullName(), person2.age);
