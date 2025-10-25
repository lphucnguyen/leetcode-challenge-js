/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(2n)
// SC: O(n)
// Solution: Array
var maxAdjacentDistance = function(nums) {
    let max = 0;
    const newNums = [...nums, ...nums];

    for (let i = 1; i < newNums.length * 2; i++) {
        max = Math.max(max, Math.abs(newNums[i] - newNums[i - 1]));
    }

    return max;
};