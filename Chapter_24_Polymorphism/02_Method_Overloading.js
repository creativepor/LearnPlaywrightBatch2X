// Method Overloading Patterns in JavaScript
// JavaScript doesn't support true method overloading (same method name, different parameters)
// but we can achieve similar behavior using patterns

console.log("=== Pattern 1: Using arguments object ===\n");

class Calculator {
  add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
}

const calc = new Calculator();
console.log(calc.add(5)); // 5
console.log(calc.add(5, 10)); // 15
console.log(calc.add(5, 10, 15, 20)); // 50

console.log("\n=== Pattern 2: Using rest parameters ===\n");

class Concatenator {
  join(...items) {
    return items.join(" ");
  }
}

const concat = new Concatenator();
console.log(concat.join("Hello")); // Hello
console.log(concat.join("Hello", "World")); // Hello World
console.log(concat.join("Hello", "World", "!", "How", "are", "you?")); // Hello World ! How are you?

console.log("\n=== Pattern 3: Using default parameters ===\n");

class Logger {
  log(message, level = "INFO", timestamp = true) {
    const time = timestamp ? new Date().toISOString() : "";
    const prefix = timestamp ? `[${time}] [${level}]` : `[${level}]`;
    console.log(`${prefix} ${message}`);
  }
}

const logger = new Logger();
logger.log("Application started"); // Full output
logger.log("Warning occurred", "WARNING"); // With level
logger.log("Error detail", "ERROR", false); // Without timestamp

console.log("\n=== Pattern 4: Using parameter objects ===\n");

class DataProcessor {
  process(config = {}) {
    const {
      data = [],
      format = "JSON",
      compress = false,
      validate = true
    } = config;

    console.log(`Processing ${data.length} items as ${format}, Compress: ${compress}, Validate: ${validate}`);
  }
}

const processor = new DataProcessor();
processor.process(); // Uses all defaults
processor.process({ data: [1, 2, 3] }); // Override data
processor.process({ 
  data: [1, 2, 3, 4, 5], 
  format: "XML", 
  compress: true,
  validate: false
}); // Override multiple

console.log("\n=== Pattern 5: Type checking (Duck Typing) ===\n");

class Printer {
  print(input) {
    if (typeof input === "string") {
      console.log(`String output: ${input}`);
    } else if (typeof input === "number") {
      console.log(`Number output: ${input}`);
    } else if (Array.isArray(input)) {
      console.log(`Array output: [${input.join(", ")}]`);
    } else if (typeof input === "object") {
      console.log(`Object output:`, input);
    } else {
      console.log(`Unknown type: ${typeof input}`);
    }
  }
}

const printer = new Printer();
printer.print("Hello"); // String
printer.print(42); // Number
printer.print([1, 2, 3]); // Array
printer.print({ name: "John", age: 30 }); // Object

console.log("\n=== Pattern 6: Method chaining with overloaded behavior ===\n");

class Builder {
  constructor() {
    this.config = {};
  }

  set(key, value) {
    if (typeof key === "object") {
      // Handle object input
      Object.assign(this.config, key);
    } else {
      // Handle key-value input
      this.config[key] = value;
    }
    return this;
  }

  build() {
    console.log("Built config:", this.config);
    return this.config;
  }
}

const builder = new Builder();
builder.set("name", "John").set("age", 30).set("city", "NYC").build();

const builder2 = new Builder();
builder2
  .set({ name: "Alice", age: 25, email: "alice@example.com" })
  .build();
