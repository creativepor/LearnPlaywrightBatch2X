// OOPs IQ Question 7: Composition vs Inheritance
// Question: When to use each and what are the tradeoffs?

console.log("=== INHERITANCE APPROACH ===\n");

class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Bird extends Animal {
  fly() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  // Problem: Penguin inherits fly() but can't use it!
  fly() {
    throw new Error("Penguins cannot fly!");
  }
}

const penguin = new Penguin();
penguin.eat(); // Works
try {
  penguin.fly(); // Throws error - Liskov Substitution Principle violation
} catch (e) {
  console.log("❌", e.message);
}

console.log("\n=== COMPOSITION APPROACH (Better for Penguin) ===\n");

class AnimalComposition {
  eat() {
    console.log("Eating...");
  }
}

class FlyingBehavior {
  fly() {
    console.log("Flying...");
  }
}

class SwimmingBehavior {
  swim() {
    console.log("Swimming...");
  }
}

class PenguinComposition {
  constructor() {
    this.animal = new AnimalComposition();
    this.swimmer = new SwimmingBehavior();
  }

  eat() {
    this.animal.eat();
  }

  swim() {
    this.swimmer.swim();
  }
}

const penguin2 = new PenguinComposition();
penguin2.eat(); // Works
penguin2.swim(); // Works
// penguin2.fly() doesn't exist - perfect!

console.log("\n=== Another Example: Car ===\n");

class Engine {
  start() {
    console.log("Engine started");
  }
  stop() {
    console.log("Engine stopped");
  }
}

class Transmission {
  shift() {
    console.log("Shifting gears");
  }
}

class Wheels {
  roll() {
    console.log("Wheels rolling");
  }
}

// Composition: Car HAS-A engine, transmission, wheels
class Car {
  constructor() {
    this.engine = new Engine();
    this.transmission = new Transmission();
    this.wheels = new Wheels();
  }

  start() {
    this.engine.start();
    this.wheels.roll();
  }

  stop() {
    this.engine.stop();
  }

  accelerate() {
    this.transmission.shift();
    this.wheels.roll();
  }
}

const car = new Car();
car.start();
car.accelerate();
car.stop();

console.log("\n=== ANSWER ===");
console.log(`
INHERITANCE (IS-A):
Pros:
✅ Simple for clear hierarchies
✅ Code reuse through inheritance
✅ Polymorphism naturally supported
✅ Smaller code in some cases

Cons:
❌ Tight coupling between classes
❌ Rigid hierarchies (hard to change later)
❌ Liskov Substitution Principle violations (Penguin example)
❌ Inheritance explosion problem
❌ Fragile base class problem

Use When:
- Clear IS-A relationship exists
- Behavior is consistently shared
- Hierarchy is stable and won't change

COMPOSITION (HAS-A):
Pros:
✅ Flexible - can change behavior at runtime
✅ Loose coupling - easier to modify
✅ Avoids Liskov violations
✅ Easy to test (inject dependencies)
✅ Better for real-world modeling

Cons:
❌ More verbose - need more code
❌ Less convenient access to nested objects
❌ Need explicit delegation

Use When:
- Multiple ways to combine behaviors
- Hierarchy might change
- Need runtime flexibility
- Avoiding inheritance conflicts

Decision Tree:
Is it a clear IS-A relationship?
├─ YES: Can hierarchy stay stable forever?
│   ├─ YES: Consider inheritance
│   └─ NO: Use composition
└─ NO: Use composition

Real-World Rule of Thumb:
"Favor composition over inheritance"
- More flexible
- Fewer design problems
- Easier to maintain long-term

Example Comparison:
WRONG (Inheritance):
class Dog extends Animal { }
class Bird extends Animal { }
class Penguin extends Bird { } // Problem!

RIGHT (Composition):
class Dog {
  animal = new Animal();
  flyer = null;
}

class Penguin {
  animal = new Animal();
  swimmer = new Swimming();
}

Modern Approach:
Use inheritance for true specialization.
Use composition for behavior combination.
Use interfaces/protocols for contracts.
`);
