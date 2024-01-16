// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Example 3:
// Input: nums = [-2,4,3,4]
// Output: 48

// Example 4:
// Input: nums = [-2,4,-3,4]
// Output: 96

// Solution: Dynamic Programming
// - create a prevMin, prevMax, result variable, set them to nums[0]
// - loop through from 1 to nums.length
//   - create a currentMax, currentMin variable
//   - currentMax is either the current number, prevMax * current number, or prevMin * current number
//   - currentMin is either the current number, prevMax * current number, or prevMin * current number
//   - set prevMax to currentMax
//   - set prevMin to currentMin
//   - set result to Math.max(result, currentMax, currentMin)
// - return result
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProduct = function(nums) {
    let prevMin = nums.at(0);
    let prevMax = nums.at(0);
    let result = nums.at(0);

    for (let i = 1; i < nums.length; i++) {
        // Use currentMax, prevMax to keep track of the largest positive number
        let currentMax = Math.max(nums[i], prevMax*nums[i], prevMin*nums[i]);
        // Use currentMin, prevMin to keep track of the smallest negative number
        // If the current number is negative, prevMin * current number will be the largest positive number
        // Example: [-2, 4, -3, 4]
        // - when we are 2 indices [-2, 4] -> -8
        // - when we are 3 indices [-2, 4, -3] -> 24
        // currentMin is either the current number, prevMax * current number, or prevMin * current number
        let currentMin = Math.min(nums[i], prevMax*nums[i], prevMin*nums[i]);

        prevMax = currentMax;
        prevMin = currentMin;

        result = Math.max(result, currentMax, currentMin);
    }

    return result;
};