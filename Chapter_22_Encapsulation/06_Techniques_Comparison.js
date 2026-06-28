// Encapsulation Techniques Comparison

console.log("=== 1. Using Convention (Single Underscore) ===");
class PersonConvention {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Convention: treat as private (but not enforced)
  }

  getAge() {
    return this._age;
  }
}

const person1 = new PersonConvention("Alice", 25);
console.log(person1.getAge()); // 25
console.log(person1._age); // 25 - Can still access! Only a convention

console.log("\n=== 2. Using WeakMap ===");
const ageMap = new WeakMap();

class PersonWeakMap {
  constructor(name, age) {
    this.name = name;
    ageMap.set(this, age);
  }

  getAge() {
    return ageMap.get(this);
  }
}

const person2 = new PersonWeakMap("Bob", 30);
console.log(person2.getAge()); // 30
console.log(person2._age); // undefined - truly private
// Cannot access ageMap from outside

console.log("\n=== 3. Using Private Fields (ES2022 - Best Practice) ===");
class PersonPrivateFields {
  #age; // Truly private

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const person3 = new PersonPrivateFields("Charlie", 35);
console.log(person3.getAge()); // 35
// console.log(person3.#age); // SyntaxError - Cannot access
// Most secure and recommended approach

console.log("\n=== 4. Comparison Summary ===");
console.log(`
Convention (_age):
- Pros: Simple, backward compatible
- Cons: Not truly private, relies on developer discipline

WeakMap:
- Pros: Truly private
- Cons: Difficult to debug, WeakMap scope issues

Private Fields (#):
- Pros: Syntax clean, truly private, performant, debuggable
- Cons: ES2022+ only (check browser compatibility)
`);
