// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// We can solve this problem in two steps:
// Step1: Convert it into tranpose matrix.
// Step2: Reverse each row.
// Explanation
// Lets take the above example:
//                             [[1, 2, 3]
//                              [4, 5, 6]
//                              [7, 8, 9]]
// Step1: Convert it into transpose matrix:
//                             [[1, 4, 7]
//                              [2, 5, 8]
//                              [3, 6, 9]]
// Step2: Reverse all the rows:
//                             [[7, 4, 1]
//                              [8, 5, 2]
//                              [9, 6, 3]]
// So, this is our final answer.

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


// Solution: Transpose and Reverse
// - Create a function to transpose the matrix
// - Create a function to swap the column
// - Transpose the matrix
// - Swap the column
// - Return the matrix
// Time complexity: O(n^2)
// Space complexity: O(1)


var rotate = function(matrix) {
    const transpose = (matrix) => {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j <= i; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }

    const swapColumn = (matrix) => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = matrix[i].reverse();
        }
    }

    transpose(matrix);
    swapColumn(matrix);
};