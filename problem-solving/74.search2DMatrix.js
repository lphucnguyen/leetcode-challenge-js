// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Solution 1: Linear Search
// - Create two variable row = 0, cell = matrix[0].size() - 1 as index of row and column
// - Run a while loop and traverse all the elements until row is equal to the size of the matrix
// - If the element is equal to the target, return true
// - Check if the current element is greater than target
// - If the current element is less than target
// - Return false
// - Time complexity is O(n + m)
// - Space complexity is O(1)

// Solution 2: Binary Search
// - Create two variable top = 0, bottom = matrix.size() - 1 as index of row
// - Create a function binarySearch to search for the target in a 1D array
// - Run a while loop and traverse all the elements until top is less than or equal to bottom
// - Create a variable mid = top + (bottom - top) / 2 as index of row
// - Create a variable midRow = matrix[mid] as the current row
// - Create a variable rowLength = matrix[mid].size() as the size of the current row
// - If the last element of the current row is less than the target, set top = mid + 1
// - If the first element of the current row is greater than the target, set bottom = mid - 1
// - Return the result of binarySearch function
// - Time complexity is O(log(mn))
// - Space complexity is O(1)

var searchMatrix = function(matrix, target) {
    // Linear Search - Time complexity: O(n + m)

    // // Create two variable row = 0, cell = matrix[0].size() - 1 as index of row and column....
    // let row = 0;
    // let cell = matrix[0].length - 1;

    // // Run a while loop and traverse all the elements until row is equal to the size of the matrix...
    // while (row <= matrix.length - 1 && cell >= 0) {
    //     // If the element is equal to the target, return true...
    //     if (matrix[row][cell] === target) {
    //         return true;
    //     }
    //     // Check if the current element is greater than target...
    //     else if(matrix[row][cell] > target) {
    //         cell--;
    //     }
    //     // If the current element is less than target...
    //     else {
    //         row++;
    //     }
    // }

    // return false;

    // Binary Search - Time complexity: O(log(mn))

    let top = 0;
    let bottom = matrix.length - 1;

    // Binary Search in a 1D array
    const binarySearch = (target, arr) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === target) return true;
            else if (arr[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return false;
    }

    // Binary Search in a 2D array
    while (top <= bottom) {
        const mid = top + Math.floor((bottom - top) / 2);
        const midRow = matrix[mid];
        const rowLength = matrix[mid].length;

        if (midRow[rowLength - 1] < target) top = mid + 1;
        else if (midRow[0] > target) bottom = mid - 1;
        else {
            return binarySearch(target, midRow);
        }
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false