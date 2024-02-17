// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Solution: Hash Table
// - Create a hash table to store the rows and columns that contain 0
// - Iterate through the matrix and store the rows and columns that contain 0
// - Iterate through the matrix and set the rows and columns that contain 0 to 0
// - Return the matrix
// - Time complexity is O(n^2)
// - Space complexity is O(1)

var setZeroes = function(matrix) {
    // Create a hash table to store the rows and columns that contain 0
    const hashTableColumns = new Set();
    const hashTableRows = new Set();

    // Iterate through the matrix and store the rows and columns that contain 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                hashTableRows.add(i);
                hashTableColumns.add(j);
            }
        }
    }

    // Iterate through the matrix and set the rows and columns that contain 0 to 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (hashTableRows.has(i) || hashTableColumns.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])); // [[1,0,1],[0,0,0],[1,0,1]]
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]