// OOPs IQ Question 8: This Binding and Arrow Functions
// Question: What's the difference in 'this' binding?

console.log("=== Regular Function Method ===\n");

class Person {
  name = "John";

  greetRegular() {
    console.log(`Hello, I'm ${this.name}`);
  }

  greetArrow = () => {
    console.log(`Hello, I'm ${this.name}`);
  }

  testThis() {
    console.log(\"this in method:\", this.name); // John
  }
}

const person = new Person();
person.greetRegular(); // Works: this = person
person.greetArrow(); // Works: this = person

// Store method in variable
const regularGreet = person.greetRegular;
const arrowGreet = person.greetArrow;

console.log(\"\\nCalling stored methods:\\n\");

try {
  regularGreet(); // ❌ ERROR: this is undefined
} catch (e) {
  console.log(\"❌ regularGreet() error: Cannot read property 'name' of undefined\");
}

arrowGreet(); // ✅ Works: arrow function retains 'this'\n");

console.log("\\n=== Event Handler Example ===\\n");

class Button {
  label = \"Click me\";

  handleClickRegular() {
    console.log(`${this.label} clicked`);
  }

  handleClickArrow = () => {
    console.log(`${this.label} clicked`);
  }

  handleClickBound = this.handleClickRegular.bind(this);
}

const button = new Button();

// Simulating DOM event listener
const listeners = {
  regular: button.handleClickRegular,
  arrow: button.handleClickArrow,
  bound: button.handleClickBound
};

console.log(\"Simulating click events:\\n\");

try {
  listeners.regular(); // ❌ Error
} catch (e) {
  console.log(\"❌ Event with regular method: this is undefined\");
}

listeners.arrow(); // ✅ Works
listeners.bound(); // ✅ Works

console.log(\"\\n=== Method Chaining Example ===\\n");

class Calculator {
  value = 0;

  add(n) {
    this.value += n;
    return this; // For chaining
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  getValueRegular() {
    return this.value;
  }

  getValueArrow = () => {
    return this.value;
  }
}

const calc = new Calculator();
calc.add(5).multiply(2).add(3);
console.log(\"Chain result:\", calc.value); // 13

console.log(\"\\n=== ANSWER ===\");
console.log(`
'THIS' BINDING DIFFERENCES:

REGULAR FUNCTION:
- 'this' determined by how function is called
- Calling: obj.method() → this = obj
- Calling: method() → this = undefined (strict mode)
- Calling: listener() → this = undefined (event context)
- Can be changed with .bind(), .call(), .apply()

ARROW FUNCTION:
- 'this' bound at definition time
- Inherits 'this' from enclosing scope
- Cannot be changed (bind/call/apply ignored)
- Perfect for callbacks and event handlers

Comparison Table:
                    | Regular | Arrow
--------------------|---------|--------
'this' binding      | Dynamic | Lexical
When set           | Call time | Definition time
Method calls       | Works   | Works
Callback/Listener  | Breaks  | Works
bind/call/apply    | Works   | Ignored
Constructor        | Can use | Can't use
Arguments binding  | Yes     | Inherits

When to Use:

REGULAR FUNCTION:
- Methods that rely on object context
- When you need dynamic 'this'
- Constructor functions
- When you want to use .bind()

ARROW FUNCTION:
- Callbacks and event handlers
- setTimeout/setInterval
- Array methods (map, filter, etc)
- When you need stable 'this'

Real-World Examples:

❌ Wrong (Regular in event handler):
button.addEventListener('click', person.greet); // 'this' breaks

✅ Right (Arrow in event handler):
button.addEventListener('click', () => person.greet());
OR
button.addEventListener('click', person.greet.bind(person));

❌ Wrong (Arrow in method):
class User {
  getName = () => this.name; // No benefit, confusing
}

✅ Right (Regular for methods):
class User {
  getName() { return this.name; }
}

BEST PRACTICE:
Use regular methods for class methods.
Use arrow functions for callbacks.
This keeps code predictable and maintainable.
`);
