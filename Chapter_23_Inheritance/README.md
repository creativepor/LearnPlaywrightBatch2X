# Inheritance - Object-Oriented Programming

This chapter covers **Inheritance**, a fundamental concept in OOP that allows classes to inherit properties and methods from other classes.

## Overview

Inheritance enables:
- **Code Reusability**: Share common functionality across multiple classes
- **Hierarchical Organization**: Create parent-child relationships
- **Extensibility**: Build new classes on existing ones
- **Maintainability**: Update behavior in one place (parent class)

## Files in This Chapter

### 1. **01_Inheritance_Basics.js**
- Introduction to inheritance using ES6 `extends` keyword
- Using `super()` to call parent constructor
- Accessing parent methods through inheritance
- Demonstrates basic parent-child relationship with Animal and Dog classes

### 2. **02_Method_Overriding.js**
- Child classes overriding parent class methods
- Using `super.methodName()` to call parent implementation
- Real-world example: Vehicle, Car, Motorcycle
- Shows how different classes implement methods differently

### 3. **03_Multi_Level_Inheritance.js**
- Inheritance chain across multiple levels
- Example: LivingThing → Mammal → Primate → Human
- Accessing methods from any level in the hierarchy
- `instanceof` operator to check inheritance chain

### 4. **04_Prototype_Inheritance.js**
- Traditional JavaScript inheritance using prototypes (pre-ES6)
- Using constructor functions and `Object.create()`
- Setting up inheritance without ES6 classes
- Alternative approach to ES6 class-based inheritance

### 5. **05_Real_World_Example.js**
- Complete employee management system
- Employee hierarchy: Employee → Developer, Manager → Director
- Practical use of inheritance for different job roles
- Demonstrates polymorphic behavior with same interface

## Key Concepts

### `extends` Keyword
```javascript
class Dog extends Animal {
  // Dog inherits from Animal
}
```

### `super()` Constructor
```javascript
constructor(name, age, breed) {
  super(name, age); // Call parent constructor
  this.breed = breed;
}
```

### Method Overriding
```javascript
class Dog extends Animal {
  bark() {
    // New method in Dog
  }

  // Override parent method
  makeSound() {
    console.log("Woof!");
  }
}
```

### `super` for Parent Methods
```javascript
class Car extends Vehicle {
  start() {
    super.start(); // Call parent method
    console.log("Car engine starting");
  }
}
```

## Inheritance vs Composition

### Inheritance (IS-A)
```javascript
class Dog extends Animal {
  // Dog IS-AN Animal
}
```
Used when there's a direct relationship.

### Composition (HAS-A)
```javascript
class Car {
  engine = new Engine();
  // Car HAS-AN Engine
}
```
Used for more flexible design.

## Inheritance Hierarchy

```
Object
  ↓
LivingThing
  ↓
Mammal
  ↓
Primate
  ↓
Human
```

## instanceof Operator

Check if an object is an instance of a class:
```javascript
const human = new Human("John");

human instanceof Human;      // true
human instanceof Primate;    // true
human instanceof Mammal;     // true
human instanceof LivingThing; // true
human instanceof Object;     // true
```

## Access Modifiers (Simulated)

JavaScript doesn't have true access modifiers, but ES2022 added private fields:

```javascript
class Animal {
  #privateProperty = "hidden"; // Private
  publicProperty = "visible";  // Public
}
```

## Best Practices

✅ **DO:**
- Use inheritance for IS-A relationships
- Keep inheritance hierarchies shallow (2-3 levels)
- Call `super()` when overriding constructor
- Override methods to specialize behavior
- Use descriptive class names

❌ **DON'T:**
- Create deep inheritance chains (>4 levels)
- Override methods unnecessarily
- Mix inheritance and composition carelessly
- Create circular inheritance
- Treat inheritance as the only code reuse mechanism

## Common Pitfalls

### Not Calling `super()`
```javascript
// ❌ Wrong
constructor(name, age, breed) {
  this.breed = breed;
  // Missing super(name, age)
}

// ✅ Correct
constructor(name, age, breed) {
  super(name, age);
  this.breed = breed;
}
```

### Forgetting Method Binding
```javascript
// ❌ Can cause 'this' issues
method = myObject.method;
method(); // 'this' is undefined

// ✅ Use arrow functions or bind
method = () => myObject.method();
```

## Real-World Examples

- **Employee Management**: Employee → Developer, Manager, Director
- **Payment Systems**: PaymentMethod → CreditCard, PayPal, Bitcoin
- **UI Components**: Component → Button, TextInput, Checkbox
- **Database**: Connection → MySQL, PostgreSQL, MongoDB
- **Shapes**: Shape → Circle, Rectangle, Triangle

## Comparison with Other Languages

| Feature | JavaScript | Java | Python |
|---------|-----------|------|--------|
| Inheritance | `extends` | `extends` | `:` or `()` |
| Super call | `super()` | `super()` | `super()` |
| Multiple Inheritance | No | No | Yes |
| Interface | Simulated | `interface` | Abstract class |
| Access Modifiers | Limited | `public, private, protected` | Convention-based |

## Learning Path

1. Start with 01_Inheritance_Basics.js
2. Study 02_Method_Overriding.js
3. Explore 03_Multi_Level_Inheritance.js
4. Review 04_Prototype_Inheritance.js for traditional approach
5. Apply concepts in 05_Real_World_Example.js

## Related Concepts

- **Encapsulation**: Bundling data and methods
- **Polymorphism**: Using objects of different types with same interface
- **Composition**: Combining objects instead of inheriting
- **Prototypes**: JavaScript's inheritance mechanism
- **SOLID Principles**: Design principles for better OOP

## Practice Exercises

1. Create a `Vehicle` hierarchy with Car, Motorcycle, and Truck
2. Build an `Animal` kingdom with different animal types
3. Design a game with different character types inheriting from Character
4. Create a library system with different book types
5. Build a shape calculator with multiple shape types

## Summary

Inheritance is a powerful OOP mechanism that promotes code reuse and creates logical hierarchies. Use it when you have clear IS-A relationships between classes. Remember to keep hierarchies shallow and consider composition for more complex scenarios.
