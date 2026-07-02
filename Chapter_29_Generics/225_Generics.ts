// Chapter 29: Generics
// Generics allow us to create reusable components that work with different types.

// 1. Generic function
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));

// 2. Generic array
function printArray<T>(items: T[]): void {
    items.forEach(item => console.log(item));
}

printArray<string>(["Playwright", "TypeScript", "JavaScript"]);

// 3. Generic class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const box1 = new Box<number>(10);
const box2 = new Box<string>("Hello Generics");

console.log(box1.getValue());
console.log(box2.getValue());

// 4. Generic interface
interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const response: ApiResponse<number> = {
    success: true,
    data: 200
};

console.log(response);
