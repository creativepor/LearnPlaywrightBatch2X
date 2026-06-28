# Polymorphism - Object-Oriented Programming

This chapter covers **Polymorphism**, a core OOP concept meaning "many forms" - the ability to use objects of different types with a common interface.

## Overview

Polymorphism enables:
- **Flexible Code**: Write code that works with different types
- **Extensibility**: Add new types without changing existing code
- **Runtime Behavior**: Methods behave differently based on object type
- **Loose Coupling**: Reduce dependencies between classes

## Files in This Chapter

### 1. **01_Polymorphism_Basics.js**
- Introduction to method overriding polymorphism
- Same method name, different implementations
- Functions that accept parent class accept all child classes
- Real-world example: Animal with Dog, Cat, Bird

### 2. **02_Method_Overloading.js**
- JavaScript patterns that simulate method overloading
- **Pattern 1**: Using `arguments` object
- **Pattern 2**: Using rest parameters (`...args`)
- **Pattern 3**: Using default parameters
- **Pattern 4**: Using parameter objects
- **Pattern 5**: Type checking (duck typing)
- **Pattern 6**: Method chaining with overloaded behavior

### 3. **03_Duck_Typing.js**
- "If it walks like a duck and quacks like a duck, it's a duck"
- Focus on what an object can do, not what type it is
- No inheritance required
- Examples: Musical instruments, Serializable objects, Data sources
- Benefits of duck typing approach

### 4. **04_Interface_Patterns.js**
- Simulating interfaces in JavaScript
- **Pattern 1**: Abstract base class with abstract methods
- **Pattern 2**: Using Symbols for explicit contracts
- **Pattern 3**: Runtime validation with config objects
- **Pattern 4**: Type checking with `instanceof`
- Database adapter example with MySQL, PostgreSQL

### 5. **05_Real_World_Example.js**
- Complete payment processing system
- Different payment methods: CreditCard, PayPal, ApplePay, Bitcoin
- Polymorphic transaction processing
- Shopping cart checkout example
- All payment types work with same interface

## Key Concepts

### Method Overriding
```javascript
class Animal {
  makeSound() {
    console.log("Generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

### Polymorphic Function
```javascript
function animalSound(animal) {
  animal.makeSound(); // Works with any Animal subtype
}

animalSound(new Dog());    // "Woof!"
animalSound(new Cat());    // "Meow!"
animalSound(new Bird());   // "Tweet!"
```

### Duck Typing
```javascript
// Any object with play() method works
function performConcert(instrument) {
  instrument.play();
}

performConcert(new Guitar());
performConcert(new Piano());
performConcert(new Violin());
```

## Types of Polymorphism

### 1. Compile-Time (Static) Polymorphism
- **Method Overloading**: Same method name, different parameters
- JavaScript doesn't support true overloading (no compile-time)
- Can be simulated with patterns

### 2. Runtime (Dynamic) Polymorphism
- **Method Overriding**: Child class changes parent method behavior
- Resolved at runtime based on object type
- Primary form of polymorphism in JavaScript

### 3. Duck Typing
- **Structural Polymorphism**: Based on methods/properties, not type
- No inheritance needed
- "Protocol" matching

### 4. Parametric Polymorphism
- **Generics**: Using type parameters
- Limited support in JavaScript
- TypeScript has better support

## Polymorphism Patterns

### Pattern 1: Subtype Polymorphism
```javascript
class Payment {
  process(amount) { }
}

class CreditCard extends Payment {
  process(amount) { console.log("Processing credit card"); }
}

class PayPal extends Payment {
  process(amount) { console.log("Processing PayPal"); }
}

function checkout(payment, amount) {
  payment.process(amount); // Polymorphic call
}
```

### Pattern 2: Duck Typing
```javascript
function serialize(obj) {
  if (obj.toJSON) return JSON.stringify(obj.toJSON());
  return JSON.stringify(obj);
}

// Works with any object that has toJSON()
serialize(user);
serialize(product);
serialize(order);
```

### Pattern 3: Strategy Pattern
```javascript
const strategies = {
  sort: (arr) => arr.sort(),
  filter: (arr) => arr.filter(x => x > 5),
  map: (arr) => arr.map(x => x * 2)
};

function execute(strategy, data) {
  return strategies[strategy](data);
}
```

## Abstract Classes (Simulated)

```javascript
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  getArea() {
    throw new Error("Must implement getArea()");
  }
}
```

## Method Overloading Patterns

### Pattern: Rest Parameters
```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);        // 6
sum(1, 2, 3, 4, 5);  // 15
```

### Pattern: Default Parameters
```javascript
function log(message, level = "INFO", timestamp = true) {
  // Handle different parameter combinations
}
```

### Pattern: Config Object
```javascript
function process(config = {}) {
  const { data = [], format = "JSON", compress = false } = config;
}

process();
process({ data: [1, 2, 3] });
process({ data: [1, 2, 3], format: "XML", compress: true });
```

## Benefits of Polymorphism

✅ **Code Reusability**
```javascript
const methods = [new CreditCard(), new PayPal(), new Bitcoin()];
methods.forEach(m => m.process(100)); // Same call, different behavior
```

✅ **Flexibility**
```javascript
// Add new payment type without changing checkout function
class ApplePay extends Payment { }
```

✅ **Maintainability**
- Change behavior in one place
- Easy to understand intent

✅ **Extensibility**
- Add new types easily
- Follow open-closed principle

## Comparison with Other Languages

| Feature | JavaScript | Java | Python | TypeScript |
|---------|-----------|------|--------|-----------|
| Subtype Polymorphism | ✅ | ✅ | ✅ | ✅ |
| Duck Typing | ✅ | ❌ | ✅ | Partial |
| Method Overloading | Simulated | ✅ | Partial | ✅ |
| Interface Support | Simulated | ✅ | Protocol | ✅ |
| Generic Types | Limited | ✅ | Simulated | ✅ |

## Real-World Examples

- **Payment Systems**: CreditCard, PayPal, Bitcoin payments
- **UI Frameworks**: Render different component types
- **Database Drivers**: MySQL, PostgreSQL, MongoDB adapters
- **Transport**: Car, Bicycle, Train (move differently)
- **File Formats**: JSON, XML, CSV (serialize differently)
- **Logging**: Console, File, Database loggers
- **Notifications**: Email, SMS, Push notifications

## Best Practices

✅ **DO:**
- Use polymorphism for clear type hierarchies
- Keep interface contracts consistent
- Document polymorphic behavior
- Use descriptive method names
- Favor composition when appropriate

❌ **DON'T:**
- Create overly complex hierarchies
- Mix polymorphism with global state
- Use duck typing when types are unclear
- Break the Liskov Substitution Principle
- Create confusing polymorphic chains

## Common Pitfalls

### Not Calling Super
```javascript
// ❌ Wrong
constructor() {
  this.property = value; // Parent constructor not called
}

// ✅ Correct
constructor() {
  super();
  this.property = value;
}
```

### Method Signature Mismatch
```javascript
// ❌ Wrong
class Base { process(data) { } }
class Derived { process(data, option) { } } // Different signature

// ✅ Correct
class Derived { process(data, option = null) { } } // Compatible
```

## Learning Path

1. Start with 01_Polymorphism_Basics.js
2. Study 02_Method_Overloading.js patterns
3. Explore 03_Duck_Typing.js concepts
4. Review 04_Interface_Patterns.js implementations
5. Apply in 05_Real_World_Example.js payment system

## Related Concepts

- **Inheritance**: Foundation for subtype polymorphism
- **Encapsulation**: Hiding implementation details
- **Abstraction**: Defining contracts
- **SOLID Principles**: Design principles using polymorphism
- **Design Patterns**: Strategy, Decorator, Observer use polymorphism

## Practice Exercises

1. Create a shape calculator with different shape types
2. Build a logging system with multiple output destinations
3. Design a notification system (Email, SMS, Push)
4. Implement a document converter (PDF, Word, HTML)
5. Create a data source abstraction (Database, API, Cache)

## Summary

Polymorphism is a powerful mechanism that allows objects of different types to be used interchangeably. JavaScript supports multiple forms: subtype polymorphism, duck typing, and parametric patterns. Use it to write flexible, extensible code that's easy to maintain and test.

## Key Takeaways

1. **Same interface, different behavior**: Core concept of polymorphism
2. **Runtime resolution**: Methods are resolved based on actual object type
3. **Duck typing**: JavaScript's unique approach focusing on capabilities
4. **Flexibility**: Write generic code that works with multiple types
5. **Extensibility**: Add new types without modifying existing code
