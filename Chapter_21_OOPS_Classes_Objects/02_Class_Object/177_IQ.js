// IQ Question on Classes and Objects

// What will be the output?
class MyCar {
    constructor(brand) {
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }
}

const car1 = new MyCar("Tesla");
const car2 = new MyCar("BMW");

console.log(car1.getBrand()); // Output: Tesla
console.log(car2.getBrand()); // Output: BMW
console.log(car1.brand === car2.brand); // Output: false
