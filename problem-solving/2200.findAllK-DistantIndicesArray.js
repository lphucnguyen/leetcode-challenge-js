/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
// TC: O(n^2)
// SC: O(n)
var findKDistantIndices = function(nums, key, k) {
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === key && Math.abs(i - j) <= k) {
                results.push(i);
                break;
            }
        }
    }

    return results;
};