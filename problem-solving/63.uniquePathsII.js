// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The testcases are generated so that the answer will be less than or equal to 2 * 10^9.

// Example 1:
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Example 2:
// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

// Solution: Dynamic Programming
// - Create a dp array to save the number of unique paths
// - If the first row contains an obstacle, mark it as 1 from [0, 0] to [i, 0] and mark it as 0 from [i, 0] to [n, 0]
// - If the first cell contains an obstacle, mark it as 1 from [0, 0] to [0, i] and mark it as 0 from [0, i] to [0, n]
// - Iterate through the grid
// - If the cell contains an obstacle, mark it as 0
// - Otherwise, calculate the number of unique paths
// - Save the number of unique paths
// - Return the number of unique paths
// Time complexity: O(n^2)
// Space complexity: O(n^2)


var uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
    const dp = new Array(n).fill(0).map((item) => new Array(m).fill(0));

    // If the first row contains an obstacle,
    // mark it as 1 from [0, 0] to [i, 0] and mark it as 0 from [i, 0] to [n, 0]
    for (let i = 0; i < n; i++) {
        if (obstacleGrid[i][0] !== 1) dp[i][0] = 1;
        else break;
    }

    // If the first cell contains an obstacle,
    // mark it as 1 from [0, 0] to [0, i] and mark it as 0 from [0, i] to [0, n]
    for (let j = 0; j < m; j++) {
        if (obstacleGrid[0][j] !== 1) dp[0][j] = 1;
        else break;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            // If the cell contains an obstacle, mark it as 0
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            }else {
                dp[i][j] = dp[i][j-1] + dp[i-1][j];
            }
        }
    }

    return dp[n-1][m-1];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])); // 2
console.log(uniquePathsWithObstacles([[0,1],[0,0]])); // 1