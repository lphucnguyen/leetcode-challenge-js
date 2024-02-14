// Given a triangle array, return the minimum path sum from top to bottom.
// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.


// Example 1:
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

// Example 2:
// Input: triangle = [[-10]]
// Output: -10

// Solution: Dynamic Programming
// - Create a memoization array
// - Recursive function to calculate the minimum path sum
// - If the current row is equal to the length of the triangle, return 0
// - If the value is already calculated, return the value
// - Calculate the minimum path sum
// - Save the minimum path sum
// - Return the minimum path sum
// - Return the result of the recursive function
// Time complexity: O(n^2)
// Space complexity: O(n^2)


var minimumTotal = function(triangle) {
    const n = triangle.length;
    // Create a memoization array
    const memo = new Array(n).fill(0).map(() => new Array(n).fill(-1));

    // Recursive function to calculate the minimum path sum
    const dfs = (x, y) => {
        // If the current row is equal to the length of the triangle, return 0
        if (x === n) {
            return 0;
        }
        // If the value is already calculated, return the value
        if (memo[x][y] !== -1) {
            return memo[x][y];
        }

        // Calculate the minimum path sum
        let lower_bottom = triangle[x][y] + dfs(x + 1, y);
        let lower_right = triangle[x][y] + dfs(x + 1, y + 1);
        // Save the minimum path sum
        memo[x][y] = Math.min(lower_bottom, lower_right);

        return memo[x][y];
    }

    return dfs(0, 0);
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); // 11
console.log(minimumTotal([[-10]])); // -10
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]])); // -1