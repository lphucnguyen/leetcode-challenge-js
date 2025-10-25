/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    let p = Infinity, q = Infinity, n = Infinity, i = 1;

    while (i < nums.length && nums[i] > nums[i - 1]) {
        p = i;
        i++;
    }

    while (i < nums.length && nums[i] < nums[i - 1]) {
        q = i;
        i++;
    }

    while (i < nums.length && nums[i] > nums[i - 1]) {
        n = i;
        i++;
    }

    return i === nums.length && p !== Infinity && q !== Infinity && n !== Infinity;
};