// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Solution: Dynamic Programming
// - If the length of the array is 1, return the value of the first house
// - If the length of the array is 2, return the maximum value between the first and second house
// - The maximum amount of money that can be robbed at the current house
// - The maximum amount of money that can be robbed at the previous house
// - Loop through the array starting from the third house
// Time complexity: O(n)
// Space complexity: O(1)


var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    else if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // The maximum amount of money that can be robbed at the current house
    let prevPrev = nums[0];
    // The maximum amount of money that can be robbed at the previous house
    let prev = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        // The maximum amount of money that can be robbed at the current house
        let current = Math.max(prevPrev + nums[i], prev);
        // The maximum amount of money that can be robbed at the previous house
        prevPrev = prev;
        prev = current;
    }

    return prev;
};