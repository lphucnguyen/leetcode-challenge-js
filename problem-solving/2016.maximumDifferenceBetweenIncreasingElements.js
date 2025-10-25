/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let pre = nums[0], max = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > pre) {
            max = Math.max(max, nums[i] - pre);
        } else {
            pre = nums[i];
        }
    }

    return max;
};