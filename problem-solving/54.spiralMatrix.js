// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Solution: Iterative
// - Create an empty array results to store the results
// - Create variables top, left, right, and down to store the boundaries
// - Loop through the matrix
// - Push the first row to the results array
// - Loop through the remaining rows
// - Push the last element of each row to the results array
// - Reverse each row
// - Reverse the matrix
// - Return the results array
// Time complexity: O(n)
// Space complexity: O(n)



var spiralOrder = function(matrix) {
    const results = [];

    // while (matrix.length) {
    //     const first = matrix.shift();
    //     results.push(...first);

    //     for (const row of matrix) {
    //         const last = row.pop();

    //         if (last !== undefined) {
    //             results.push(last);
    //         }
    //         row.reverse();
    //     }
    //     matrix.reverse();
    // }

    let top = 0, left = 0;
    let right = matrix[0].length - 1, down = matrix.length - 1;

    while (true) {
        for (let i = left; i <= right; i++) {
            results.push(matrix[top][i]);
        }
        top++;
        if (top > down) break;

        for (let i = top; i <= down; i++) {
            results.push(matrix[i][right]);
        }
        right--;
        if (right < left) break;

        for (let i = right; i >= left; i--) {
            results.push(matrix[down][i]);
        }
        down--;
        if (top > down) break;

        for (let i = down; i >= top; i--) {
            results.push(matrix[i][left]);
        }
        left++;
        if (right < left) break;
    }

    return results;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]