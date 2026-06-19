// 126_Object_Methods.js

const rectangle = {
    width: 10,
    height: 5,
    area: function() {
        return this.width * this.height;
    },
    describe() {
        return `Rectangle ${this.width}x${this.height}`;
    }
};

console.log(rectangle.describe());
console.log("Area:", rectangle.area());

// Methods can also use other object properties
const student = {
    name: "Ayesha",
    grades: [90, 85, 92],
    average() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
};

console.log("Student average:", student.average());
