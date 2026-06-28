// Real-World Polymorphism Example: Payment Processing System

class PaymentMethod {
  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }

  // Abstract method
  processPayment(amount) {
    throw new Error("processPayment() must be implemented");
  }

  // Abstract method
  refund(amount) {
    throw new Error("refund() must be implemented");
  }

  getPaymentType() {
    throw new Error("getPaymentType() must be implemented");
  }
}

class CreditCard extends PaymentMethod {
  constructor(accountHolder, cardNumber, cvv, expiryDate) {
    super(accountHolder);
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expiryDate = expiryDate;
  }

  processPayment(amount) {
    console.log(`💳 Processing credit card payment of $${amount}`);
    console.log(`   Card: **** **** **** ${this.cardNumber.slice(-4)}`);
    console.log(`   Amount charged to card`);
    return { success: true, transactionId: `CC-${Date.now()}` };
  }

  refund(amount) {
    console.log(`💳 Refunding $${amount} to credit card`);
    return { success: true, refundId: `CR-${Date.now()}` };
  }

  getPaymentType() {
    return "Credit Card";
  }
}

class PayPal extends PaymentMethod {
  constructor(accountHolder, email) {
    super(accountHolder);
    this.email = email;
  }

  processPayment(amount) {
    console.log(`🅿️ Processing PayPal payment of $${amount}`);
    console.log(`   Account: ${this.email}`);
    console.log(`   Redirecting to PayPal...`);
    return { success: true, transactionId: `PP-${Date.now()}` };
  }

  refund(amount) {
    console.log(`🅿️ Refunding $${amount} to PayPal account`);
    return { success: true, refundId: `PR-${Date.now()}` };
  }

  getPaymentType() {
    return "PayPal";
  }
}

class ApplePay extends PaymentMethod {
  constructor(accountHolder, deviceId) {
    super(accountHolder);
    this.deviceId = deviceId;
  }

  processPayment(amount) {
    console.log(`🍎 Processing Apple Pay payment of $${amount}`);
    console.log(`   Device ID: ${this.deviceId}`);
    console.log(`   Biometric authentication required`);
    return { success: true, transactionId: `AP-${Date.now()}` };
  }

  refund(amount) {
    console.log(`🍎 Refunding $${amount} via Apple Pay`);
    return { success: true, refundId: `APR-${Date.now()}` };
  }

  getPaymentType() {
    return "Apple Pay";
  }
}

class Bitcoin extends PaymentMethod {
  constructor(accountHolder, walletAddress) {
    super(accountHolder);
    this.walletAddress = walletAddress;
  }

  processPayment(amount) {
    console.log(`₿ Processing Bitcoin payment of ${amount / 50000} BTC`); // assuming $50k per BTC
    console.log(`   Wallet: ${this.walletAddress.slice(0, 10)}...`);
    console.log(`   Confirming blockchain transaction...`);
    return { success: true, transactionId: `BTC-${Date.now()}` };
  }

  refund(amount) {
    console.log(`₿ Refunding ${amount / 50000} BTC to wallet`);
    return { success: true, refundId: `BTCR-${Date.now()}` };
  }

  getPaymentType() {
    return "Bitcoin";
  }
}

// Polymorphic function - works with any payment method
function processTransaction(paymentMethod, amount) {
  console.log(`\n${"=".repeat(50)}`);
  console.log(`Processing transaction via ${paymentMethod.getPaymentType()}`);
  console.log(`Amount: $${amount}`);
  console.log(`Account Holder: ${paymentMethod.accountHolder}`);
  console.log("=".repeat(50));

  const result = paymentMethod.processPayment(amount);
  console.log(`Transaction ID: ${result.transactionId}\n`);
  return result;
}

function processRefund(paymentMethod, amount) {
  console.log(`\n${"=".repeat(50)}`);
  console.log(`Processing refund via ${paymentMethod.getPaymentType()}`);
  console.log(`Amount: $${amount}`);
  console.log("=".repeat(50));

  const result = paymentMethod.refund(amount);
  console.log(`Refund ID: ${result.refundId}\n`);
  return result;
}

// Usage - Polymorphism in action
console.log("========== PAYMENT PROCESSING SYSTEM ==========\n");

const creditCard = new CreditCard("Alice Johnson", "4532015112830366", "123", "12/25");
const paypal = new PayPal("bob@example.com", "bob@example.com");
const applePay = new ApplePay("Charlie Smith", "DEVICE-123456");
const bitcoin = new Bitcoin("Diana Prince", "1A1z7agoat4c9aZCvDmx7VwXXrXh5G46CV");

// Array of different payment methods
const payments = [creditCard, paypal, applePay, bitcoin];

// Process transactions with all payment methods
console.log("=== PROCESSING TRANSACTIONS ===\n");
payments.forEach(payment => {
  processTransaction(payment, 99.99);
});

// Process refunds
console.log("\n=== PROCESSING REFUNDS ===\n");
payments.forEach(payment => {
  processRefund(payment, 25.00);
});

// Real-world scenario: Shopping cart checkout
console.log("\n=== SHOPPING CART CHECKOUT ===");

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(item, price) {
    this.items.push({ item, price });
    this.total += price;
  }

  checkout(paymentMethod) {
    console.log(`\nCheckout with ${paymentMethod.getPaymentType()}`);
    console.log("Items:", this.items.length);
    console.log(`Total: $${this.total.toFixed(2)}`);
    return processTransaction(paymentMethod, this.total);
  }
}

const cart = new ShoppingCart();
cart.addItem("Laptop", 999.99);
cart.addItem("Mouse", 29.99);
cart.addItem("Keyboard", 79.99);

console.log("\n--- Customer 1 checking out with Credit Card ---");
cart.checkout(creditCard);

console.log("\n--- Customer 2 checking out with Bitcoin ---");
const cart2 = new ShoppingCart();
cart2.addItem("Gaming PC", 2499.99);
cart2.checkout(bitcoin);
