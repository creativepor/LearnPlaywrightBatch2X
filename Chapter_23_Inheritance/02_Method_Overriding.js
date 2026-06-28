// Method Overriding
// Child class provides a specific implementation of a parent class method

class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log("Vehicle starting...");
  }

  stop() {
    console.log("Vehicle stopping...");
  }

  displayInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

// Child Class 1
class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model);
    this.doors = doors;
  }

  // Override parent method
  start() {
    console.log(`${this.brand} ${this.model} car engine starting with VROOOOM!`);
  }

  // Override parent method
  displayInfo() {
    super.displayInfo(); // Call parent method
    console.log(`Doors: ${this.doors}`);
  }
}

// Child Class 2
class Motorcycle extends Vehicle {
  constructor(brand, model, haseSidecar) {
    super(brand, model);
    this.hasSidecar = haseSidecar;
  }

  // Override parent method
  start() {
    console.log(`${this.brand} ${this.model} motorcycle starting with a quick BEEP BEEP!`);
  }

  // Override parent method
  stop() {
    console.log(`${this.brand} ${this.model} motorcycle stopping with a skid!`);
  }
}

// Usage
console.log("=== Car ===");
const car = new Car("Toyota", "Camry", 4);
car.start();
car.displayInfo();
car.stop();

console.log("\n=== Motorcycle ===");
const bike = new Motorcycle("Harley", "Davidson", false);
bike.start();
bike.displayInfo();
bike.stop();

console.log("\n=== Generic Vehicle ===");
const vehicle = new Vehicle("Generic", "Model");
vehicle.start();
vehicle.stop();
