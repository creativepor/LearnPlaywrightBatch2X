// Prototype-Based Inheritance
// Traditional JavaScript inheritance using prototypes (before ES6 classes)

// Constructor function (Parent)
function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return this.color;
};

Shape.prototype.describe = function () {
  console.log(`This shape is ${this.color}`);
};

// Constructor function (Child)
function Circle(color, radius) {
  Shape.call(this, color); // Call parent constructor
  this.radius = radius;
}

// Set up inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Circle-specific method
Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

// Override parent method
Circle.prototype.describe = function () {
  Shape.prototype.describe.call(this); // Call parent method
  console.log(`Radius: ${this.radius}`);
};

// Usage
console.log("=== Prototype-Based Inheritance ===");
const circle = new Circle("red", 5);
circle.describe();
console.log("Area:", circle.getArea());
console.log("Color:", circle.getColor());

console.log("\n=== instanceof Check ===");
console.log(circle instanceof Circle); // true
console.log(circle instanceof Shape); // true
console.log(circle instanceof Object); // true

// Another example
function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.describe = function () {
  Shape.prototype.describe.call(this);
  console.log(`Width: ${this.width}, Height: ${this.height}`);
};

console.log("\n=== Rectangle ===");
const rect = new Rectangle("blue", 4, 6);
rect.describe();
console.log("Area:", rect.getArea());
