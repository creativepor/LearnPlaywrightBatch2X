// Encapsulation with Private Fields (#)
// ES2022 introduced private fields using the # symbol

class Student {
  #gpa; // Private field
  #studentId; // Private field
  name; // Public field

  constructor(name, studentId, gpa) {
    this.name = name;
    this.#studentId = studentId;
    this.#gpa = gpa;
  }

  // Public method
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Student ID: ${this.#studentId}`);
    console.log(`GPA: ${this.#gpa}`);
  }

  // Public method to update GPA
  updateGPA(newGPA) {
    if (newGPA >= 0 && newGPA <= 4.0) {
      this.#gpa = newGPA;
      console.log("GPA updated successfully");
    } else {
      console.log("Invalid GPA");
    }
  }

  // Public method to get GPA
  getGPA() {
    return this.#gpa;
  }

  // Private method (cannot be called from outside)
  #calculateScholarship() {
    if (this.#gpa >= 3.5) {
      return 5000;
    }
    return 0;
  }
}

//Object creation and usage
const student1 = new Student("John", "S123", 3.8);
student1.displayInfo();
student1.updateGPA(3.9);
console.log("GPA:", student1.getGPA());

// These will cause errors:
// console.log(student1.#gpa); // SyntaxError: Private field '#gpa' must be declared
// student1.#calculateScholarship(); // Error: Private method
