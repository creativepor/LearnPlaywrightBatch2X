// OOPs IQ Question 9: SOLID Principles - Single Responsibility
// Question: What's wrong with this code? How to fix it?

console.log(\"=== WRONG: Multiple Responsibilities ===\\n\");

class UserManager {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Responsibility 1: User data
  getUserInfo() {
    return { name: this.name, email: this.email };
  }

  // Responsibility 2: Database operations
  saveToDatabase() {
    console.log(`Saving ${this.name} to database`);
    // Database logic
  }

  // Responsibility 3: Email sending
  sendWelcomeEmail() {
    console.log(`Sending email to ${this.email}`);
    // Email logic
  }

  // Responsibility 4: Logging
  logActivity(action) {
    console.log(`${this.name} performed: ${action}`);
  }

  // Responsibility 5: Validation
  validateEmail() {
    return this.email.includes('@');
  }

  // Responsibility 6: Payment
  processPayment(amount) {
    console.log(`Processing payment of $${amount} for ${this.name}`);
  }
}

const user = new UserManager(\"John\", \"john@example.com\");
console.log(\"Problems with this design:\");
console.log(\"1. Too many reasons to change the class\");
console.log(\"2. Hard to test individual functionality\");
console.log(\"3. Hard to reuse components\");
console.log(\"4. Violates Single Responsibility Principle\\n\");

console.log(\"=== CORRECT: Single Responsibility ===\\n\");

// Responsibility 1: User data
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return { name: this.name, email: this.email };
  }
}

// Responsibility 2: User persistence
class UserRepository {
  save(user) {
    console.log(`Saving ${user.name} to database`);
    // Database logic
  }

  findById(id) {
    // Query database
  }
}

// Responsibility 3: Email sending
class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}`);
    // Email sending logic
  }

  sendResetLink(user) {
    console.log(`Sending reset link to ${user.email}`);
  }
}

// Responsibility 4: Logging
class Logger {
  log(message) {
    console.log(`[LOG] ${message}`);
  }

  error(message) {
    console.log(`[ERROR] ${message}`);
  }
}

// Responsibility 5: Validation
class Validator {
  isValidEmail(email) {
    return email.includes('@') && email.includes('.');
  }

  isValidName(name) {
    return name.length > 0;
  }
}

// Responsibility 6: Payment
class PaymentService {
  process(user, amount) {
    console.log(`Processing payment of $${amount} for ${user.name}`);
    // Payment logic
  }
}

// Usage - Dependency Injection
const userRepository = new UserRepository();
const emailService = new EmailService();
const logger = new Logger();
const validator = new Validator();
const paymentService = new PaymentService();

const newUser = new User(\"Jane\", \"jane@example.com\");

console.log(\"Using separated classes:\\n\");
userRepository.save(newUser);
emailService.sendWelcomeEmail(newUser);
logger.log(`User ${newUser.name} registered`);
if (validator.isValidEmail(newUser.email)) {
  console.log(\"✅ Email is valid\");
}
paymentService.process(newUser, 99.99);

console.log(\"\\n=== ANSWER ===\");
console.log(`
SINGLE RESPONSIBILITY PRINCIPLE:
A class should have one and only one reason to change.

Problems with Multiple Responsibilities:
❌ Hard to understand (too much code)
❌ Hard to test (many dependencies)
❌ Hard to reuse (tightly coupled)
❌ Hard to maintain (change in one breaks another)
❌ Violates SOLID principle

Benefits of Single Responsibility:
✅ Easy to understand (focused purpose)
✅ Easy to test (isolated concerns)
✅ Easy to reuse (small, focused classes)
✅ Easy to maintain (change one thing safely)
✅ Follows SOLID principle

Design Pattern: Separation of Concerns

Instead of:
- UserManager (does everything)

Use:
- User (data)
- UserRepository (persistence)
- EmailService (communication)
- Logger (logging)
- Validator (validation)
- PaymentService (payments)

Benefits:
1. Each class is small and focused
2. Each class has one reason to change
3. Easy to test each component
4. Easy to reuse components
5. Easy to extend (add new functionality)

Example Changes:

If you need to change database logic:
- Only modify UserRepository
- Other classes unaffected

If you need to change email format:
- Only modify EmailService
- Other classes unaffected

If you need to add SMS notification:
- Create SMSService
- Other classes unaffected

Dependency Injection:
Instead of creating dependencies inside:
class User {
  db = new Database(); // BAD: tight coupling
}

Inject them:
class User {
  constructor(repository) {
    this.repository = repository; // GOOD: loose coupling
  }
}

This allows easy testing and flexibility.

SOLID Principles (Single Responsibility is first S):
S - Single Responsibility Principle
O - Open/Closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle
`);
