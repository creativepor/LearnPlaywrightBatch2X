// 128_Nested_Objects.js

const company = {
    name: "Tech Solutions",
    address: {
        street: "123 Main Street",
        city: "Lahore",
        country: "Pakistan",
    },
    departments: [
        { name: "Engineering", head: "Ali" },
        { name: "Marketing", head: "Sara" },
    ],
};

console.log(company.name);
console.log(company.address.city);
console.log(company.departments[0].name);

// Modify nested property
company.address.country = "USA";
console.log("Updated country:", company.address.country);
