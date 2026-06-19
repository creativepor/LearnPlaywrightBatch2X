// 125_Object_Properties.js

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
};

// Access properties
console.log(car.make);
console.log(car["model"]);

// Update property
car.year = 2023;
console.log("Updated year:", car.year);

// Add new property
car.color = "blue";
console.log("Color:", car.color);

// Delete property
delete car.model;
console.log("Car after delete:", car);
