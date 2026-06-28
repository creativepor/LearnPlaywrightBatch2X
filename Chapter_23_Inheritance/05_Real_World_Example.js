// Real-World Inheritance Example: Employee Management System

class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.hireDate = new Date();
  }

  getInfo() {
    return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
  }

  giveRaise(percent) {
    const raise = this.salary * (percent / 100);
    this.salary += raise;
    console.log(`Raised ${this.name}'s salary by ${percent}%. New salary: $${this.salary}`);
  }

  work() {
    console.log(`${this.name} is working`);
  }

  takeLunchBreak() {
    console.log(`${this.name} is taking lunch break`);
  }
}

class Developer extends Employee {
  constructor(id, name, salary, programmingLanguages = []) {
    super(id, name, salary);
    this.programmingLanguages = programmingLanguages;
  }

  getInfo() {
    return `${super.getInfo()}, Languages: ${this.programmingLanguages.join(", ")}`;
  }

  code() {
    console.log(`${this.name} is writing code in ${this.programmingLanguages[0]}`);
  }

  learnNewLanguage(language) {
    this.programmingLanguages.push(language);
    console.log(`${this.name} learned ${language}`);
  }
}

class Manager extends Employee {
  constructor(id, name, salary, department, teamSize = 0) {
    super(id, name, salary);
    this.department = department;
    this.teamSize = teamSize;
  }

  getInfo() {
    return `${super.getInfo()}, Department: ${this.department}, Team Size: ${this.teamSize}`;
  }

  conductMeeting() {
    console.log(`${this.name} is conducting a meeting for ${this.department} department`);
  }

  hireEmployee(employee) {
    this.teamSize++;
    console.log(`${this.name} hired ${employee.name}. Team size: ${this.teamSize}`);
  }
}

class Director extends Manager {
  constructor(id, name, salary, department, teamSize, budget) {
    super(id, name, salary, department, teamSize);
    this.budget = budget;
  }

  getInfo() {
    return `${super.getInfo()}, Budget: $${this.budget}`;
  }

  approveBudget(amount) {
    if (amount <= this.budget) {
      console.log(`Director ${this.name} approved budget of $${amount}`);
      this.budget -= amount;
    } else {
      console.log(`Budget $${amount} exceeds available budget of $${this.budget}`);
    }
  }
}

// Usage
console.log("=== Employee Hierarchy ===\n");

const dev1 = new Developer(101, "Alice", 80000, ["JavaScript", "Python"]);
console.log(dev1.getInfo());
dev1.work();
dev1.code();
dev1.learnNewLanguage("Go");
console.log(dev1.getInfo());
dev1.giveRaise(10);

console.log("\n");

const manager = new Manager(201, "Bob", 120000, "Engineering", 5);
console.log(manager.getInfo());
manager.work();
manager.conductMeeting();
manager.hireEmployee(dev1);
console.log(manager.getInfo());

console.log("\n");

const director = new Director(301, "Charlie", 200000, "Technology", 20, 500000);
console.log(director.getInfo());
director.work();
director.conductMeeting();
director.approveBudget(100000);
director.approveBudget(450000);
console.log(`Remaining budget: $${director.budget}`);

console.log("\n=== instanceof Checks ===");
console.log(dev1 instanceof Developer, dev1 instanceof Employee);
console.log(manager instanceof Manager, manager instanceof Employee);
console.log(director instanceof Director, director instanceof Manager, director instanceof Employee);
