/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
// https://leetcode.com/problems/next-greater-element-ii/solutions/127612/next-greater-element-ii
var nextGreaterElements = function(nums) {
    const results = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * nums.length; i++) {
        const num = nums[i % nums.length];

        while (stack.length && nums[stack.at(-1)] < num) {
            results[stack.pop()] = num;
        }

        if (i < nums.length) stack.push(i);
    }

    // console.log(stack);
    return results;
};