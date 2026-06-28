// OOPs IQ Question 6: Static Members and Instance Members
// Question: What's the difference and when to use each?

class Counter {
  // Static property - shared by all instances
  static totalInstances = 0;
  static totalCounts = 0;

  // Instance property - unique to each instance
  count = 0;

  constructor(name) {
    this.name = name;
    Counter.totalInstances++;
  }

  // Instance method
  increment() {
    this.count++;
    Counter.totalCounts++;
    console.log(`${this.name} count: ${this.count}`);
  }

  // Static method
  static showStats() {
    console.log(`Total instances: ${Counter.totalInstances}`);
    console.log(`Total increments: ${Counter.totalCounts}`);
  }

  // Static method to compare instances
  static compareCounters(c1, c2) {
    return c1.count > c2.count ? c1.name : c2.name;
  }
}

console.log("=== Static vs Instance Members ===\n");

const counter1 = new Counter("Counter1");
const counter2 = new Counter("Counter2");
const counter3 = new Counter("Counter3");

console.log("Initial state:");
Counter.showStats();

console.log("\nIncrementing counters:");
counter1.increment();
counter1.increment();
counter2.increment();
counter3.increment();

Counter.showStats();

console.log("\nComparison:");
const winner = Counter.compareCounters(counter1, counter2);
console.log(`${winner} has higher count`);

console.log("\n=== ANSWER ===");
console.log(`
INSTANCE MEMBERS:
- Belong to individual objects
- Each instance has its own copy
- Accessed via this or instance name
- Value unique to each instance
- Memory allocated per instance

Example: this.count is different for each Counter object

STATIC MEMBERS:
- Belong to the class itself
- Shared across all instances
- Accessed via ClassName.memberName
- Memory allocated once for all instances
- Used for class-level functionality

Example: Counter.totalInstances is same for all instances

When to Use Static:
✅ Class-level data (total instances, global config)
✅ Utility methods (helpers, factory methods)
✅ Constants (MAX_SIZE, TIMEOUT, etc.)
✅ Shared functionality across all instances

When to Use Instance:
✅ Object-specific data (name, age, id)
✅ Object-specific behavior (methods)
✅ Data that varies per instance
✅ State that changes independently

Comparison Table:
                | Instance | Static
----------------|----------|--------
Scope           | Per object | Per class
Memory          | Per instance | Once
Accessed via    | object.prop | Class.prop
Number of copies | Multiple | One
Use for         | State | Class behavior

Real-World Example (User Management):
class User {
  // Static for tracking
  static totalUsers = 0;
  static loggedInUsers = 0;
  
  // Instance for individual data
  userId;
  username;
  email;
  
  constructor(username, email) {
    this.userId = ++User.totalUsers;
    this.username = username;
    this.email = email;
  }
  
  login() {
    User.loggedInUsers++;
  }
  
  logout() {
    User.loggedInUsers--;
  }
  
  static getOnlineCount() {
    return User.loggedInUsers;
  }
}
`);
