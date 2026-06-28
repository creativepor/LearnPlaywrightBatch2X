// OOPs IQ Question 2: Private Fields and Encapsulation
// Question: Which statements will cause errors?

class BankAccount {
  #balance = 0; // Private field
  name = ""; // Public field

  constructor(name, initialBalance) {
    this.name = name;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("John", 1000);

console.log("=== Testing access ===\n");

// Test 1: This works
console.log("✅ account.name:", account.name); // Works - public field

// Test 2: This works
console.log("✅ account.getBalance():", account.getBalance()); // Works - public method

// Test 3: This will cause error
try {
  console.log(account.#balance); // ❌ SyntaxError
} catch (e) {
  console.log("❌ account.#balance causes SyntaxError - private field");
}

// Test 4: This will cause error
try {
  account.#balance = 9999; // ❌ SyntaxError
} catch (e) {
  console.log("❌ Assigning to account.#balance causes SyntaxError");
}

// Test 5: This works (indirect access through public method)
account.deposit(500);
console.log("✅ After deposit, balance:", account.getBalance());

console.log("\n=== ANSWER ===");
console.log(`
Errors will occur at:
1. account.#balance (Reading private field) - SyntaxError
2. account.#balance = 9999 (Writing to private field) - SyntaxError

Why?
- Private fields (#) cannot be accessed from outside the class
- Only public methods can access and modify them
- This is encapsulation - hiding internal data

Benefits:
- Data security
- Prevents accidental external modification
- Enforces using defined public interface
- Implementation details hidden
`);
