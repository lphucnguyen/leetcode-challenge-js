// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Solution: Greedy
// - Initialize the target to the last index
// - Iterate from the last element to the first
//   - If the current element can reach the target, update the target
// - If the target is 0, then we can reach the last index
// - Time Complexity: O(n)
// - Space Complexity: O(1)


var canJump = function(nums) {
    // Initialize the target to the last index
    let target = nums.length - 1;

    // Iterate from the last element to the first
    for (let i = nums.length - 1; i >= 0; i--) {
        // If the current element can reach the target, update the target
        if (nums[i] + i >= target) {
            target = i;
        }
    }

    // If the target is 0, then we can reach the last index
    return target === 0;
};

console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false