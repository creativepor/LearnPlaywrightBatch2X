// OOPs IQ Question 1: Understanding Inheritance and Super
// Question: What will be the output of this code?

class Vehicle {
  constructor(brand) {
    this.brand = brand;
    console.log("Vehicle constructor called");
  }

  start() {
    console.log(`${this.brand} vehicle is starting`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    console.log("Car constructor starting");
    super(brand);
    this.model = model;
    console.log("Car constructor ending");
  }

  start() {
    console.log(`${this.brand} ${this.model} car is starting`);
  }
}

const car = new Car("Toyota", "Camry");
car.start();

console.log("\n=== ANSWER ===");
console.log(`
Output will be:
Car constructor starting
Vehicle constructor called
Car constructor ending
Toyota Camry car is starting

Explanation:
1. Constructor execution order: Child constructor runs first
2. super(brand) calls parent constructor which logs 'Vehicle constructor called'
3. Then child constructor continues and logs 'Car constructor ending'
4. car.start() calls the overridden method in Car class (polymorphism)
`);
