// Chapter 16: 2D Arrays

// 1. Create a 2D array (array of arrays)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// 2. Access elements
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8

// 3. Iterate over rows and columns
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        process.stdout.write(matrix[row][col] + " ");
    }
    console.log();
}

// 4. Add a new row
matrix.push([10, 11, 12]);
console.log(matrix);

// 5. Modify an item
matrix[0][1] = 20;
console.log(matrix[0]);

// 6. Map a 2D array to a new 2D array
const doubled = matrix.map(row => row.map(value => value * 2));
console.log(doubled);