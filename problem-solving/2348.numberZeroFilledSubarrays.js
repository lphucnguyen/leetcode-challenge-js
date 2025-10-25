/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n)
// SC: O(1);
// Solution: Greedy
// https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/6460147/simple-o-n-solution
var zeroFilledSubarray = function(nums) {
    let sumZero = 0;
    let lengthZero = 0;

    for (const num of nums) {
        if (num === 0) {
            lengthZero++;
            sumZero += lengthZero;
        } else {
            lengthZero = 0;
        }
    }

    return sumZero;
};