// There is a robot on an m x n grid.
// The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Solution: Dynamic Programming
// - Create a dp array with m rows and n columns
// - Fill the first row and column with 1
// - Loop through the dp array
//   - The number of ways in i, j position is i-1, j + i, j-1
// - Return the last value in the dp array
// Time Complexity: O(n*m)
// Space Complexity: O(n*m)


var uniquePaths = function(m, n) {
    // Base case: [1, m], [1, n] is 1
    const dp = new Array(m).fill(0).map(item => new Array(n).fill(1));

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            // The number of ways in i, j position is i-1, j + i, j-1
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp.at(-1).at(-1);
};