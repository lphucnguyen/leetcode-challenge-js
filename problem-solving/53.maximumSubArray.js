// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Solution: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSub = nums[0];

    // Sliding window to solve this problem
    // currentSum = currentSum + num
    // If currentSum < 0 -> currentSum = 0 -> start sliding window from this num
    // If currentSum >= 0 -> currentSum + num -> start sliding window to next num
    // maxSub = Math.max(maxSub, currentSum)
    for (const num of nums) {
        if (currentSum < 0) currentSum = 0;
        currentSum += num;
        maxSub = Math.max(maxSub, currentSum);
    }

    return maxSub;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));