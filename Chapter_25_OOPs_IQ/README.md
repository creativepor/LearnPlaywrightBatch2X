# OOPs IQ - Object-Oriented Programming Questions & Concepts

This chapter contains **10 comprehensive OOP interview questions and conceptual challenges** that test deep understanding of OOP principles in JavaScript.

## Overview

These questions cover real-world scenarios and common interview topics to help you:
- Understand OOP concepts deeply
- Prepare for technical interviews
- Learn best practices
- Apply concepts to real projects
- Avoid common pitfalls

## Questions in This Chapter

### 1. **01_IQ_Inheritance_Super.js**
**Topic:** Inheritance and Constructor Chaining
- Understanding `extends` and `super()`
- Constructor execution order
- Method overriding in child classes
- **Key Concept:** Super calls parent constructor before child constructor runs

### 2. **02_IQ_Private_Fields.js**
**Topic:** Encapsulation with Private Fields
- Private fields using `#` symbol
- Data encapsulation and security
- Public vs private access
- **Key Concept:** Private fields cannot be accessed from outside the class

### 3. **03_IQ_instanceof.js**
**Topic:** instanceof and Inheritance Chain
- Checking types in inheritance hierarchies
- instanceof with parent and child classes
- Truth table for inheritance chains
- **Key Concept:** Child instances are instances of parent classes

### 4. **04_IQ_Method_Overriding.js**
**Topic:** Method Overriding and Polymorphism
- How method overriding enables polymorphism
- Same method name, different behavior
- Polymorphic function patterns
- **Key Concept:** Open/Closed Principle - extend without modifying

### 5. **05_IQ_Getter_Setter.js**
**Topic:** Getters and Setters
- Using `get` and `set` keywords
- Data validation through setters
- Computed properties with getters
- Side effects in setters
- **Key Concept:** Getters/setters look like properties but run code

### 6. **06_IQ_Static_Instance.js**
**Topic:** Static vs Instance Members
- Static properties (shared by all instances)
- Instance properties (unique per object)
- Static methods (class-level functionality)
- Instance methods (object-level functionality)
- **Key Concept:** Static members belong to class, instance members to objects

### 7. **07_IQ_Composition_Inheritance.js**
**Topic:** Composition vs Inheritance
- When to use composition (HAS-A)
- When to use inheritance (IS-A)
- Liskov Substitution Principle violations
- Design tradeoffs
- **Key Concept:** "Favor composition over inheritance"

### 8. **08_IQ_This_Binding.js**
**Topic:** This Binding and Arrow Functions
- Regular function `this` binding
- Arrow function lexical `this`
- Event handlers and callbacks
- Method storage and binding
- **Key Concept:** Arrow functions lock `this` to definition scope

### 9. **09_IQ_SOLID_SRP.js**
**Topic:** SOLID Principles - Single Responsibility
- Multiple responsibilities problems
- Separating concerns
- Dependency injection
- Class redesign patterns
- **Key Concept:** Each class should have one reason to change

### 10. **10_IQ_Factory_Pattern.js**
**Topic:** Design Pattern - Factory Pattern
- Encapsulating object creation
- Factory methods
- Reducing client coupling
- Adding new types easily
- **Key Concept:** Factory centralizes object creation logic

## Learning Paths

### For Beginners
1. Start with 01 (Inheritance basics)
2. Learn 02 (Encapsulation)
3. Study 04 (Polymorphism)
4. Review 06 (Static vs Instance)

### For Intermediate
1. Review 03 (instanceof)
2. Study 05 (Getters/Setters)
3. Learn 07 (Composition vs Inheritance)
4. Understand 08 (This binding)

### For Advanced
1. Master 09 (SOLID Principles)
2. Implement 10 (Factory Pattern)
3. Combine concepts from all chapters
4. Design real-world systems

### For Interview Prep
1. Review all 10 questions
2. Understand the "ANSWER" sections
3. Practice explaining each concept
4. Try implementing examples from scratch
5. Combine multiple concepts together

## Common Interview Questions

Based on these files, here are common interview patterns:

### "Explain Inheritance"
See: 01_IQ_Inheritance_Super.js, 07_IQ_Composition_Inheritance.js

### "What's the difference between 'this' in regular and arrow functions?"
See: 08_IQ_This_Binding.js

### "When would you use static members?"
See: 06_IQ_Static_Instance.js

### "Explain encapsulation"
See: 02_IQ_Private_Fields.js, 09_IQ_SOLID_SRP.js

### "What is polymorphism?"
See: 04_IQ_Method_Overriding.js, 03_IQ_instanceof.js

### "Composition vs Inheritance?"
See: 07_IQ_Composition_Inheritance.js

### "What are design patterns?"
See: 10_IQ_Factory_Pattern.js

### "Explain SOLID principles"
See: 09_IQ_SOLID_SRP.js

## Running the Files

Each file is self-contained with:
- Problem demonstration
- Solutions
- Detailed explanations
- Best practices
- Real-world examples

```bash
# Run any file to see the question and answer
node 01_IQ_Inheritance_Super.js
node 02_IQ_Private_Fields.js
node 10_IQ_Factory_Pattern.js
```

## Key Concepts Summary

### Inheritance
```javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

### Encapsulation
```javascript
class BankAccount {
  #balance = 0; // Private
  getBalance() { return this.#balance; }
}
```

### Polymorphism
```javascript
shapes.forEach(shape => shape.draw()); // Works with different types
```

### Getters/Setters
```javascript
get age() { return this.birthYear; }
set age(value) { this.birthYear = value; }
```

### Static Members
```javascript
class User {
  static totalUsers = 0;
  static create(name) { return new User(name); }
}
```

### Composition
```javascript
class Car {
  engine = new Engine();
  wheels = new Wheels();
}
```

### This Binding
```javascript
// Regular: 'this' depends on call
// Arrow: 'this' from definition scope
const arrow = () => this.property;
```

### SOLID Principles
- **S**ingle Responsibility: One reason to change
- **O**pen/Closed: Open for extension, closed for modification
- **L**iskov Substitution: Subtypes must be substitutable
- **I**nterface Segregation: Clients shouldn't depend on unused methods
- **D**ependency Inversion: Depend on abstractions, not concretions

### Design Patterns
- **Factory**: Centralize object creation
- **Singleton**: Single instance
- **Strategy**: Multiple algorithms
- **Observer**: Event notification
- **Decorator**: Add behavior dynamically

## Best Practices Checklist

✅ **DO:**
- Use inheritance for clear IS-A relationships
- Use composition for HAS-A relationships
- Keep classes focused (Single Responsibility)
- Use private fields for encapsulation
- Use getters/setters for validation
- Prefer dependency injection
- Use factory pattern for complex creation
- Follow SOLID principles

❌ **DON'T:**
- Create deep inheritance chains (>3 levels)
- Mix too many concerns in one class
- Access private fields from outside
- Use inheritance for code reuse only
- Create static properties carelessly
- Forget to call super() in constructor
- Use arrow functions as methods unnecessarily

## Real-World Applications

These concepts are used in:
- **Frontend Frameworks**: React, Vue, Angular components
- **Backend**: Express, Node.js server architecture
- **Databases**: ORM patterns (Sequelize, TypeORM)
- **Design Systems**: Component libraries
- **Game Development**: Entity systems
- **Testing**: Mocking and stubbing patterns

## Practice Exercises

1. **Extend the examples**
   - Add new animal types to inheritance examples
   - Add new payment methods to polymorphism examples
   - Create new document types in factory pattern

2. **Fix anti-patterns**
   - Refactor a God class into multiple classes
   - Convert inheritance chain into composition
   - Fix this binding issues in callbacks

3. **Combine concepts**
   - Build a user management system using all concepts
   - Create a document processing system
   - Implement a game with inheritance and composition

4. **Interview practice**
   - Explain each concept without looking
   - Answer follow-up questions
   - Implement concepts from scratch
   - Design systems using these patterns

## Advanced Topics to Explore

After mastering these 10 questions:
- **Design Patterns**: Observer, Decorator, Strategy, Adapter
- **SOLID Principles**: All 5 principles in depth
- **Architectural Patterns**: MVC, MVVM, Entity Component System
- **Functional Programming**: Immutability, pure functions
- **TypeScript**: Strong typing for OOP concepts

## Resources for Further Learning

- MDN Web Docs: Classes and OOP concepts
- "Refactoring: Improving the Design of Existing Code" - Martin Fowler
- "Design Patterns: Elements of Reusable Object-Oriented Software" - Gang of Four
- "Clean Code" - Robert Martin
- "The Pragmatic Programmer"

## Summary

This chapter provides:
1. **10 core OOP concepts** explained with code
2. **Real-world examples** for each concept
3. **Common pitfalls** and how to avoid them
4. **Best practices** for professional code
5. **Interview preparation** materials
6. **Design patterns** fundamentals

Master these concepts to:
✅ Pass technical interviews
✅ Write better OOP code
✅ Design scalable systems
✅ Understand frameworks better
✅ Debug OOP issues effectively

Happy learning! 🎓
