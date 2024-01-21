// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Solution: Dynamic Programming
// - If n < 3 => return n
// - Create a baseClimb array [1, 2]
// - Loop from 3 to n
//   - temp = baseClimb[1]
//   - baseClimb[1] = baseClimb[0] + baseClimb[1]
//   - baseClimb[0] = temp
// Time Complexity: O(n)
// Space Complexity: O(1)

var climbStairs = function(n) {
    let temp = 0;
    const baseClimb = [1, 2];

    if (n < 3) return baseClimb[n-1];

    for (let i = 3; i <= n; i++) {
        temp = baseClimb[1];
        baseClimb[1] = baseClimb[0] + baseClimb[1];
        baseClimb[0] = temp;
    }

    return baseClimb[1];
};