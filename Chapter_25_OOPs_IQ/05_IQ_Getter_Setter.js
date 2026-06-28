// OOPs IQ Question 5: Getter and Setter
// Question: What are the benefits and how do they work?

class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for full name
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  // Getter for age (computed property)
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Setter for birthYear (setting age indirectly)
  set age(value) {
    this.birthYear = new Date().getFullYear() - value;
  }

  // Email validation through setter
  #email = "";

  get email() {
    return this.#email;
  }

  set email(value) {
    if (value.includes("@") && value.includes(".")) {
      this.#email = value;
      console.log(`✅ Email set to: ${value}`);
    } else {
      console.log(`❌ Invalid email: ${value}`);
    }
  }
}

console.log("=== Getters and Setters Demo ===\n");

const person = new Person("John", "Doe", 1990);

// Using getter
console.log("Full name (getter):", person.fullName);
console.log("Age (computed getter):", person.age);

// Using setter
person.fullName = "Jane Smith";
console.log("After fullName setter:", person.fullName);

person.age = 25;
console.log("Birth year updated via age setter:", person.birthYear);

// Validation through setter
person.email = "john@example.com";
person.email = "invalid-email";

console.log("\n=== ANSWER ===");
console.log(`
Benefits of Getters and Setters:

1. DATA VALIDATION
   - Validate data before setting (like email validation)
   - Prevent invalid states
   
2. COMPUTED PROPERTIES
   - Calculate age from birthYear on the fly
   - fullName from firstName and lastName
   - No need to store computed values
   
3. ENCAPSULATION
   - Hide internal implementation
   - Can change logic without affecting external code
   - Use private fields with getters/setters
   
4. SIDE EFFECTS
   - Perform actions when property changes
   - Log changes, notify observers, trigger updates
   
5. BACKWARD COMPATIBILITY
   - Add getters/setters to existing properties
   - Change from property to computed value seamlessly

Syntax:
get propertyName() { return value; }
set propertyName(value) { this.property = value; }

Usage:
person.email = "test@example.com"; // Uses setter
let mail = person.email;            // Uses getter

This looks like property access but runs getter/setter logic!

Real-World Examples:
- React: State setters trigger re-renders
- Database: Getters/setters handle query caching
- Validation: Form fields validate on change
- Notifications: Database trigger observers on update
`);
