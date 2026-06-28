// You need to create a class with the name of Calculator 
// where you will have different methods available for some addition, 
// subtraction, modulus, division, and multiplication. 
// What will happen is you will basically create an object with 
// the two variables. 
// You will basically give the output of some subtraction, modulus, division, and multiplication. 

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }

    modulus() {
        return this.num1 % this.num2;
    }
}   

const calc = new Calculator(10, 5);
console.log("Addition:", calc.add());
console.log("Subtraction:", calc.subtract());
console.log("Multiplication:", calc.multiply());
console.log("Division:", calc.divide());
console.log("Modulus:", calc.modulus());    


