// Interface-like Patterns in JavaScript
// Simulate interface behavior to enforce polymorphic contracts

console.log("=== Pattern 1: Abstract Base Class ===\n");

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Shape is an abstract class and cannot be instantiated");
    }
  }

  // Abstract method - must be implemented by subclass
  getArea() {
    throw new Error("getArea() must be implemented by subclass");
  }

  // Abstract method
  getPerimeter() {
    throw new Error("getPerimeter() must be implemented by subclass");
  }

  // Concrete method - implemented in base class
  describe() {
    console.log(`Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Usage
const square = new Square(5);
square.describe();

const circle = new Circle(3);
circle.describe();

// This will throw error
// const shape = new Shape(); // Error: Shape is abstract

console.log("\n=== Pattern 2: Using Symbols for Explicit Contracts ===\n");

const RENDER = Symbol("render");
const UPDATE = Symbol("update");

class Component {
  constructor() {
    if (!this[RENDER] || typeof this[RENDER] !== "function") {
      throw new Error("Component must implement render() method");
    }
    if (!this[UPDATE] || typeof this[UPDATE] !== "function") {
      throw new Error("Component must implement update() method");
    }
  }

  // Call the abstract methods
  renderComponent() {
    this[RENDER]();
  }

  updateComponent(data) {
    this[UPDATE](data);
  }
}

class Button extends Component {
  constructor(label) {
    this.label = label;
    super();
  }

  [RENDER]() {
    console.log(`<button>${this.label}</button>`);
  }

  [UPDATE](label) {
    this.label = label;
    console.log(`Button updated to: ${this.label}`);
  }
}

class TextInput extends Component {
  constructor(placeholder) {
    this.placeholder = placeholder;
    super();
  }

  [RENDER]() {
    console.log(`<input placeholder="${this.placeholder}" />`);
  }

  [UPDATE](placeholder) {
    this.placeholder = placeholder;
    console.log(`Input updated to: ${this.placeholder}`);
  }
}

// Usage
const button = new Button("Click me");
button.renderComponent();
button.updateComponent("Submit");

const input = new TextInput("Enter text...");
input.renderComponent();
input.updateComponent("Enter name...");

console.log("\n=== Pattern 3: Interface Contract with Validation ===\n");

function createShape(config) {
  if (!config.name || !config.getArea || !config.getPerimeter) {
    throw new Error("Shape must have name, getArea(), and getPerimeter() methods");
  }
  return {
    name: config.name,
    getArea: config.getArea,
    getPerimeter: config.getPerimeter,
    describe() {
      console.log(`${this.name}: Area=${this.getArea()}, Perimeter=${this.getPerimeter()}`);
    }
  };
}

const triangle = createShape({
  name: "Triangle",
  getArea() {
    return 10; // base * height / 2
  },
  getPerimeter() {
    return 30; // sum of all sides
  }
});

triangle.describe();

console.log("\n=== Pattern 4: Runtime Type Checking ===\n");

class DatabaseAdapter {
  query() {
    throw new Error("query() must be implemented");
  }

  insert() {
    throw new Error("insert() must be implemented");
  }

  delete() {
    throw new Error("delete() must be implemented");
  }
}

class MySQLAdapter extends DatabaseAdapter {
  query(sql) {
    console.log(`MySQL executing: ${sql}`);
  }

  insert(table, data) {
    console.log(`MySQL inserting into ${table}:`, data);
  }

  delete(table, id) {
    console.log(`MySQL deleting from ${table} where id = ${id}`);
  }
}

class PostgreSQLAdapter extends DatabaseAdapter {
  query(sql) {
    console.log(`PostgreSQL executing: ${sql}`);
  }

  insert(table, data) {
    console.log(`PostgreSQL inserting into ${table}:`, data);
  }

  delete(table, id) {
    console.log(`PostgreSQL deleting from ${table} where id = ${id}`);
  }
}

// Function that requires DatabaseAdapter interface
function executeOperations(adapter) {
  if (!(adapter instanceof DatabaseAdapter)) {
    throw new Error("Must provide a DatabaseAdapter instance");
  }

  adapter.query("SELECT * FROM users");
  adapter.insert("users", { name: "John", age: 30 });
  adapter.delete("users", 1);
}

console.log("MySQL Operations:");
executeOperations(new MySQLAdapter());

console.log("\nPostgreSQL Operations:");
executeOperations(new PostgreSQLAdapter());
