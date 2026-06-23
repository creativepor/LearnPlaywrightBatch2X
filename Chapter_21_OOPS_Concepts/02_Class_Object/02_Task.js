// You need to create a class with the static and non-static methods as well as variables. 
// It will be a simple class of our Playwright 2x batch. 
// You will be also printing out the students. 
// Create 10 objects of students and print them.
//  Also create a print method.

class Students {
    
    static batchName = "Playwright 2x";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }   
}

const s1 = new Students("Yasho", 32);
const s2 = new Students("Sharad", 30);
const s3 = new Students("Pramod", 28);
const s4 = new Students("Anjali", 26);
const s5 = new Students("Rohit", 24);
const s6 = new Students("Sneha", 22);
const s7 = new Students("Amit", 20);
const s8 = new Students("Priya", 18);
const s9 = new Students("Karan", 16);
const s10 = new Students("Riya", 14);

console.log(Students.batchName);
s1.print();
s2.print();
s3.print();
s4.print();
s5.print();
s6.print();
s7.print();
s8.print();
s9.print();
s10.print();

