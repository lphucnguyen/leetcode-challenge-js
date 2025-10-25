/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Sorting + Greedy
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let current = nums[0], count = 1;
    // Return number subsequences so that the maximum and minimum values in each subsequence is at most k

    for (const num of nums) {
        if (num - current > k) {
            count++;
            current = num;
        }
    }

    return count;
};