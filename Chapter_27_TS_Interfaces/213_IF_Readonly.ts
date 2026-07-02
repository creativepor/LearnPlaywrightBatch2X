// Readonly properties in interfaces
interface Point {
    readonly x: number;
    readonly y: number;
}
// Create a point object
const point: Point = { x: 10, y: 20 };
// point.x = 5; This is not possible. 

// ReadonlyArray
interface Data {
    readonly items: readonly number[];
}
console.log("Readonly Array Example:");
const data: Data = { items: [1, 2, 3] };
console.log("Items:", data.items);

