// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Solution: Dynamic Programming
// - Using binary search to add new item to increasing number array
// - Using dp array to save the increasing number array
// - maxSize is used to save the length of increasing number array
// Time complexity: O(nlogn)
// Space complexity: O(n)

var lengthOfLIS = function(nums) {
    // Dp array is used to save the increasing number array
    const dp = new Array(nums.length).fill(0);
    let maxSize = 0;

    for (const num of nums) {
        let left = 0;
        let right = maxSize;

        // Using Binary search to add new item to increasing number array
        while(left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (dp[mid] < num) left = mid + 1;
            else right = mid;
        }

        dp[left] = num;
        if (left === maxSize) {
            maxSize++;
        }
    }

    return maxSize;
};