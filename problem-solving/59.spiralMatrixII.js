// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// Example 2:
// Input: n = 1
// Output: [[1]]

// Solution: Iterative
// - Create an empty array results to store the results
// - Create variables top, left, right, and bottom to store the boundaries
// - Loop through the matrix
// - Push the count to the results array
// - Increment the count
// - Increment the top boundary
// - If the top boundary is greater than the bottom boundary, break
// - Loop through the remaining rows
// - Push the count to the results array
// - Increment the count
// - Decrement the right boundary
// - If the right boundary is less than the left boundary, break
// - Loop through the remaining columns
// - Push the count to the results array
// - Increment the count
// - Decrement the bottom boundary
// - If the top boundary is greater than the bottom boundary, break
// - Loop through the remaining rows
// - Push the count to the results array
// - Increment the count
// - Increment the left boundary
// - If the right boundary is less than the left boundary, break
// - Return the results array
// Time complexity: O(n)
// Space complexity: O(n^2)


var generateMatrix = function(n) {
    const results = new Array(n).fill(0).map(item => new Array(n).fill(0));
    let count = 1;
    let left = 0, top = 0;
    let bottom = n - 1, right = n - 1;

    while (true) {
        for (let i = left; i <= right; i++) {
            results[top][i] = count++;
        }
        top++;
        if (top > bottom) break;

        for (let i = top; i <= bottom; i++) {
            results[i][right] = count++;
        }
        right--;
        if (right < left) break;

        for (let i = right; i >= left; i--) {
            results[bottom][i] = count++;
        }
        bottom--;
        if (top > bottom) break;

        for (let i = bottom; i >= top; i--) {
            results[i][left] = count++;
        }
        left++;
        if (right < left) break;
    }

    return results;
};

console.log(generateMatrix(3)); // [[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(1)); // [[1]]