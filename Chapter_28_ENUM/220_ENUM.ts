// Chapter 28: ENUM
// Enums allow us to define a set of named constants.

// 1. Numeric Enum
enum USStatus {
    Pending,
    InProgress,
    Completed,
    Failed
}

console.log(USStatus.Pending);      // 0
console.log(USStatus.InProgress);   // 1
console.log(USStatus.Completed);    // 2
console.log(USStatus.Failed);       // 3

// 2. String Enum
enum RoadDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(RoadDirection.Up);      // UP
console.log(RoadDirection.Left);    // LEFT

// 3. Heterogeneous Enum (rarely used)
enum Mixed {
    Yes = 1,
    No = "NO"
}

console.log(Mixed.Yes); // 1
console.log(Mixed.No);  // NO

// 4. Enum with functions / computed values
enum WeekDays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday = Monday + 4
}

console.log(WeekDays.Monday);  // 1
console.log(WeekDays.Friday);  // 5

// 5. Using enum in condition
function isCompleted(status: USStatus): boolean {
    return status === USStatus.Completed;
}

console.log(isCompleted(USStatus.Completed)); // true
console.log(isCompleted(USStatus.Pending));    // false
