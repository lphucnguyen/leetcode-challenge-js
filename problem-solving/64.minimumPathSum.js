// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:
// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

// Solution: Dynamic Programming
// - Loop through the grid
//   - If i > 0 and j > 0
//     - grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
//   - Else if i > 0
//     - grid[i][j] += grid[i-1][j]
//   - Else if j > 0
//     - grid[i][j] += grid[i][j-1]
// - Return the last value in the grid
// Time Complexity: O(n*m)
// Space Complexity: O(1)


var minPathSum = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i > 0 && j > 0){
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            }
            else if (i > 0) grid[i][j] += grid[i-1][j];
            else if (j > 0) grid[i][j] += grid[i][j-1];
        }
    }

    return grid.at(-1).at(-1);
};