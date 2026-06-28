// OOPs IQ Question 3: instanceof and Inheritance Chain
// Question: What will these instanceof checks return?

class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}

const dog = new Dog();
const mammal = new Mammal();
const animal = new Animal();

console.log("=== instanceof checks ===\n");

console.log("dog instanceof Dog:", dog instanceof Dog); // true
console.log("dog instanceof Mammal:", dog instanceof Mammal); // true
console.log("dog instanceof Animal:", dog instanceof Animal); // true
console.log("dog instanceof Object:", dog instanceof Object); // true
console.log("dog instanceof String:", dog instanceof String); // false

console.log("\nmammal instanceof Mammal:", mammal instanceof Mammal); // true
console.log("mammal instanceof Animal:", mammal instanceof Animal); // true
console.log("mammal instanceof Dog:", mammal instanceof Dog); // false

console.log("\nanimal instanceof Dog:", animal instanceof Dog); // false
console.log("animal instanceof Mammal:", animal instanceof Mammal); // false
console.log("animal instanceof Animal:", animal instanceof Animal); // true

console.log("\n=== ANSWER ===");
console.log(`
Key Points:
1. instanceof checks the entire prototype chain
2. An instance of a derived class IS-AN instance of parent classes
3. But a parent instance is NOT an instance of child classes

Truth Table:
          | Dog | Mammal | Animal | Object | String
----------|-----|--------|--------|--------|--------
dog       | ✅  |   ✅   |   ✅   |   ✅   |  ❌
mammal    | ❌  |   ✅   |   ✅   |   ✅   |  ❌
animal    | ❌  |   ❌   |   ✅   |   ✅   |  ❌

Practical Use:
- Type checking in polymorphic functions
- Validation before performing operations
- Determining which specialized method to call

Example:
function processAnimal(obj) {
  if (obj instanceof Dog) {
    // Dog-specific logic
  } else if (obj instanceof Mammal) {
    // Mammal-specific logic
  }
}
`);
