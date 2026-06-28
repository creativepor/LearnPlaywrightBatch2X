// OOPs IQ Question 4: Method Overriding and Polymorphism
// Question: Identify the output and explain the concept

class Shape {
  name = "Shape";

  area() {
    return 0;
  }

  display() {
    console.log(`${this.name} area is ${this.area()}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.name = "Rectangle";
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.name = "Triangle";
    this.base = base;
    this.height = height;
  }

  area() {
    return (this.base * this.height) / 2;
  }
}

console.log("=== Polymorphic Function ===\n");

function printArea(shape) {
  shape.display(); // Same method, different behavior
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(10, 8);

printArea(circle);
printArea(rectangle);
printArea(triangle);

console.log("\n=== Array of Shapes ===\n");

const shapes = [circle, rectangle, triangle];
shapes.forEach(shape => shape.display());

console.log("\n=== ANSWER ===");
console.log(`
Output:
Circle area is 78.53981633974483
Rectangle area is 24
Triangle area is 40

Concepts Demonstrated:
1. Method Overriding: Each child class overrides area()
2. Polymorphism: Same display() method works with different types
3. Late Binding: Which area() is called determined at runtime
4. Open/Closed Principle: Open for extension, closed for modification

Why This Design is Good:
✅ Adding new shapes doesn't require changing display() or printArea()
✅ display() works with any Shape type
✅ Each shape handles its own area calculation
✅ Easy to maintain and extend

If You Add New Shape:
class Ellipse extends Shape {
  area() { return Math.PI * this.a * this.b; }
}

// No changes needed elsewhere! Just add:
printArea(new Ellipse(3, 5));
`);
