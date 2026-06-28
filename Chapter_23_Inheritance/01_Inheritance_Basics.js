// Inheritance Basics
// Inheritance: A mechanism where a class inherits properties and methods from another class

// Parent Class (Base Class / Superclass)
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Parent method
  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Child Class (Derived Class / Subclass)
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call parent constructor
    this.breed = breed;
  }

  // Child-specific method
  bark() {
    console.log(`${this.name} says: Woof! Woof!`);
  }
}

// Usage
const dog = new Dog("Buddy", 5, "Golden Retriever");
console.log(dog.getInfo()); // Inherited method
dog.eat(); // Inherited method
dog.sleep(); // Inherited method
dog.bark(); // Dog-specific method

console.log("\n=== Constructor Chain ===");
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
