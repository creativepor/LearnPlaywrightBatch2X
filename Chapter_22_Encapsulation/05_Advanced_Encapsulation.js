// Real-world Encapsulation Pattern: Bank Account with Enhanced Security

class SecureBankAccount {
  #balance;
  #transactionHistory;
  #accountNumber;
  #accountHolder;

  constructor(accountHolder, accountNumber, initialBalance = 0) {
    this.#accountHolder = accountHolder;
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
    this.#transactionHistory = [];

    if (initialBalance > 0) {
      this.#transactionHistory.push({
        type: "Initial",
        amount: initialBalance,
        date: new Date(),
        balanceAfter: this.#balance
      });
    }
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive");
      return false;
    }

    this.#balance += amount;
    this.#recordTransaction("Deposit", amount);
    console.log(`Deposited: $${amount}`);
    return true;
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive");
      return false;
    }

    if (amount > this.#balance) {
      console.log("Insufficient funds");
      return false;
    }

    this.#balance -= amount;
    this.#recordTransaction("Withdrawal", -amount);
    console.log(`Withdrawn: $${amount}`);
    return true;
  }

  getBalance() {
    return this.#balance;
  }

  getStatement() {
    return {
      accountHolder: this.#accountHolder,
      accountNumber: this.#accountNumber,
      balance: this.#balance,
      transactions: [...this.#transactionHistory] // Return copy
    };
  }

  #recordTransaction(type, amount) {
    this.#transactionHistory.push({
      type: type,
      amount: amount,
      date: new Date(),
      balanceAfter: this.#balance
    });
  }

  #validatePin(pin) {
    // Simulated PIN validation (private method)
    return pin === "1234";
  }
}

// Usage
const account = new SecureBankAccount("John Doe", "ACC123456", 5000);
account.deposit(1000);
account.withdraw(500);
account.deposit(200);

console.log("\n=== Account Statement ===");
console.log(account.getStatement());

console.log("\nCurrent Balance:", account.getBalance());

// Try to access private fields (will fail)
// console.log(account.#balance); // Error
// account.#recordTransaction("Fraud", -9999); // Error
