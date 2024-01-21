// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

// Solution: Greedy
// - Use current to keep track of the current position
// - Use maxJump to keep track of the maximum jump from i to current
// - Use steps to keep track of the number of steps
// - Loop through nums
//   - Find the maxJump from i to current
//   - If maxJump reach out the maximum length of nums => return ++steps
//   - If i === current => current will be maxJump and step++
// - Return steps
// Time Complexity: O(n)
// Space Complexity: O(1)


var jump = function(nums) {
    let current = 0;
    let maxJump = 0;
    let steps = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        // Find the maxJump from i to current
        maxJump = Math.max(maxJump, i + nums[i]);

        // maxJump reach out the maximum length of nums
        if (maxJump >= nums.length - 1) return ++steps;
        // if i === current => current will be maxJump and step++
        if (i === current) {
            current = maxJump;
            steps++;
        }
    }

    return steps;
};