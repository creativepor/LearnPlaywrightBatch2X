// Class with Methods

class Calculator {
    constructor(name) {
        this.name = name;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}

const calc = new Calculator("MyCalc");
console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));
