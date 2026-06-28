// Polymorphism Basics
// Polymorphism: "Many forms" - ability to call methods with the same name on different objects
// and have them behave differently based on the object's type

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

// Derived classes
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} says: Woof! Woof!`);
  }

  move() {
    console.log(`${this.name} is running on four legs`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} says: Meow! Meow!`);
  }

  move() {
    console.log(`${this.name} is sneaking around`);
  }
}

class Bird extends Animal {
  makeSound() {
    console.log(`${this.name} says: Tweet! Tweet!`);
  }

  move() {
    console.log(`${this.name} is flying in the sky`);
  }
}

// Polymorphic function - accepts any Animal object
function animalAction(animal) {
  animal.makeSound();
  animal.move();
}

// Usage - Polymorphism in action
console.log("=== Polymorphism Example ===\n");

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Bird("Tweety");

animalAction(dog);
console.log();
animalAction(cat);
console.log();
animalAction(bird);

// Array of different Animal types
console.log("\n=== Array of Animals ===\n");
const animals = [dog, cat, bird, new Dog("Rex"), new Cat("Fluffy")];

animals.forEach(animal => {
  animalAction(animal);
  console.log();
});

console.log("=== Polymorphism Benefits ===");
console.log("1. Same interface (makeSound, move) for all animals");
console.log("2. Different implementation based on object type");
console.log("3. Easy to extend with new animal types");
console.log("4. Flexible and maintainable code");
