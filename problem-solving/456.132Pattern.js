/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC: O(n)
// SC: O(n)
// Solution: MonoStack (store pairs of value and previous min value)
// Store nums[i] and min value of all previous values, that will be [nums[i], currentMin] in the stack
// Push to stack the value, pop stack until the value stack[-1] <= nums[i], that is 32 pattern
// If the previous min is lower nums[i], that is 13 pattern
// Combine 2 -> 132 pattern
var find132pattern = function(nums) {
    const stack = [];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        while (stack.length && nums[i] >= stack.at(-1)[0]) {
            stack.pop();
        }

        if (stack.length && nums[i] > stack.at(-1)[1]) {
            return true;
        }

        currentMin = Math.min(currentMin, nums[i]);
        stack.push([nums[i], currentMin]);
    }

    return false;
};