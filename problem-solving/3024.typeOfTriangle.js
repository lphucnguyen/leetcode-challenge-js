/**
 * @param {number[]} nums
 * @return {string}
 */
// TC: O(n)
// SC: O(1)
// Solution: Math + Sorting
var triangleType = function(nums) {
    nums.sort((a, b) => a - b);

    if (nums[0] + nums[1] <= nums[2]) {
        return 'none';
    } else if (nums[0] === nums[2]) {
        return 'equilateral';
    } else if (nums[0] === nums[1] || nums[1] === nums[2]) {
        return 'isosceles';
    }

    return 'scalene';
};