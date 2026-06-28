// Multi-Level Inheritance
// A class extends another class that itself extends another class

class LivingThing {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
  }

  breathe() {
    console.log(`${this.name} is breathing`);
  }
}

class Mammal extends LivingThing {
  constructor(name, isWarmBlooded = true) {
    super(name);
    this.isWarmBlooded = isWarmBlooded;
  }

  feed() {
    console.log(`${this.name} is feeding milk to offspring`);
  }

  getInfo() {
    return `${this.name} - Warm Blooded: ${this.isWarmBlooded}`;
  }
}

class Primate extends Mammal {
  constructor(name, opposableThumbs = true) {
    super(name, true);
    this.opposableThumbs = opposableThumbs;
  }

  thinkAbstractly() {
    console.log(`${this.name} is thinking about complex concepts`);
  }

  getFullInfo() {
    return `${this.getInfo()}, Opposable Thumbs: ${this.opposableThumbs}`;
  }
}

class Human extends Primate {
  constructor(name, language = "English") {
    super(name, true);
    this.language = language;
  }

  speak() {
    console.log(`${this.name} speaks ${this.language}`);
  }

  work() {
    console.log(`${this.name} is working`);
  }

  getAllInfo() {
    return `${this.getFullInfo()}, Language: ${this.language}`;
  }
}

// Usage
console.log("=== Inheritance Chain ===");
const human = new Human("John", "English");

console.log(human.getAllInfo());
human.breathe(); // From LivingThing
human.feed(); // From Mammal
human.thinkAbstractly(); // From Primate
human.speak(); // From Human
human.work(); // From Human

console.log("\n=== instanceof Checks ===");
console.log(human instanceof Human); // true
console.log(human instanceof Primate); // true
console.log(human instanceof Mammal); // true
console.log(human instanceof LivingThing); // true
console.log(human instanceof Object); // true

console.log("\n=== Another Example ===");
const chimpanzee = new Primate("Chucky", true);
console.log(chimpanzee.getFullInfo());
chimpanzee.breathe();
chimpanzee.feed();
chimpanzee.thinkAbstractly();
