// Duck Typing - Polymorphism
// "If it walks like a duck and quacks like a duck, it's a duck"
// Focus on what an object can do, not what type it is

console.log("=== Duck Typing Example ===\n");

// Different classes, NO inheritance relationship
class Guitar {
  play() {
    console.log("🎸 Playing rock music!");
  }

  tune() {
    console.log("Tuning guitar...");
  }
}

class Piano {
  play() {
    console.log("🎹 Playing classical music!");
  }

  tune() {
    console.log("Tuning piano...");
  }
}

class Saxophone {
  play() {
    console.log("🎷 Playing jazz music!");
  }

  tune() {
    console.log("Tuning saxophone...");
  }
}

// Function that works with ANY object that has 'play' method
function performConcert(instrument) {
  if (typeof instrument.play === "function") {
    instrument.tune();
    instrument.play();
  } else {
    console.log("This object cannot perform!");
  }
}

// Works with all three, no inheritance needed!
console.log("Concert starts!\n");
performConcert(new Guitar());
console.log();
performConcert(new Piano());
console.log();
performConcert(new Saxophone());

console.log("\n=== Another Duck Typing Example: Serializable Objects ===\n");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  toJSON() {
    return { name: this.name, email: this.email };
  }
}

class Product {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  toJSON() {
    return { id: this.id, title: this.title, price: this.price };
  }
}

class Order {
  constructor(orderId, total) {
    this.orderId = orderId;
    this.total = total;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  toJSON() {
    return { orderId: this.orderId, total: this.total, items: this.items };
  }
}

// Generic serializer that works with any object that has toJSON()
function serialize(obj) {
  if (typeof obj.toJSON === "function") {
    return JSON.stringify(obj.toJSON(), null, 2);
  }
  return JSON.stringify(obj, null, 2);
}

const user = new User("John", "john@example.com");
const product = new Product(1, "Laptop", 999.99);
const order = new Order("ORD123", 999.99);
order.addItem(product);

console.log("User serialized:");
console.log(serialize(user));

console.log("\nProduct serialized:");
console.log(serialize(product));

console.log("\nOrder serialized:");
console.log(serialize(order));

console.log("\n=== Duck Typing with Callback Pattern ===\n");

class DataFetcher {
  fetch() {
    return [1, 2, 3, 4, 5];
  }
}

class APIClient {
  fetch() {
    return { status: 200, data: ["item1", "item2"] };
  }
}

class CacheStore {
  fetch() {
    return new Map([["key1", "value1"], ["key2", "value2"]]);
  }
}

function processData(source, processor) {
  const data = source.fetch();
  console.log("Fetched data:", data);
  processor(data);
}

// All work with the same function, regardless of type
console.log("Processing from DataFetcher:");
processData(
  new DataFetcher(),
  data => console.log("Array sum:", data.reduce((a, b) => a + b, 0))
);

console.log("\nProcessing from APIClient:");
processData(
  new APIClient(),
  data => console.log("API status:", data.status)
);

console.log("\nProcessing from CacheStore:");
processData(
  new CacheStore(),
  data => console.log("Cache size:", data.size)
);

console.log("\n=== Benefits of Duck Typing ===");
console.log("1. Flexibility - any object with the right methods works");
console.log("2. No need for shared base class or interface");
console.log("3. Easy to extend - add new types without modifying existing code");
console.log("4. JavaScript natural style - loosely typed");
