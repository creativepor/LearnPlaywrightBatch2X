// Encapsulation Basics
// Encapsulation: Bundling data and methods that operate on data within a single unit (class/object)
// and hiding internal implementation details from the outside world.

// Example 1: Using closures to create private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited: $${amount}, New balance: $${balance}`);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: $${amount}, New balance: $${balance}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    getBalance: function () {
      return balance;
    }
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance:", myAccount.getBalance());
// Note: Cannot access balance directly - it's encapsulated
// myAccount.balance = 999999; // This won't affect the actual balance
