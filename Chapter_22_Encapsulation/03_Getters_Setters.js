// Encapsulation with Getters and Setters

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  // Getter for width
  get width() {
    return this.#width;
  }

  // Setter for width
  set width(value) {
    if (value > 0) {
      this.#width = value;
    } else {
      console.log("Width must be positive");
    }
  }

  // Getter for height
  get height() {
    return this.#height;
  }

  // Setter for height
  set height(value) {
    if (value > 0) {
      this.#height = value;
    } else {
      console.log("Height must be positive");
    }
  }

  // Getter for area (computed property)
  get area() {
    return this.#width * this.#height;
  }

  // Getter for perimeter
  get perimeter() {
    return 2 * (this.#width + this.#height);
  }
}

const rect = new Rectangle(10, 5);
console.log("Width:", rect.width); // Using getter
console.log("Height:", rect.height);
console.log("Area:", rect.area);
console.log("Perimeter:", rect.perimeter);

rect.width = 15; // Using setter
rect.height = 8;
console.log("\nAfter update:");
console.log("Width:", rect.width);
console.log("Area:", rect.area);

rect.width = -5; // Validation through setter
