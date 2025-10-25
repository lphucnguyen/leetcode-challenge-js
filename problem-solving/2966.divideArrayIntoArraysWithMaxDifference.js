/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Sorting
// Firstly, sorting array ascending
// Any two elements in one array is less than or equal to k = the maximum value subtract the minimum value is les than or equal k, if not return []
var divideArray = function(nums, k) {
    const results = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] <= k) {
            results.push([nums[i], nums[i + 1], nums[i + 2]]);
        } else {
            return [];
        }
    }

    return results;
};