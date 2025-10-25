/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// TC: O(n*m)
// SC: O(n*m)
// Solution: DP
var findLength = function(nums1, nums2) {
    const memo = new Array(nums1.length + 1).fill(0).map(_ => new Array(nums2.length + 1).fill(0));

    let maxLength = 0;
    for (let i = nums1.length - 1; i >= 0; i--) {
        for (let j = nums2.length - 1; j >= 0; j--) {
            if (nums1[i] == nums2[j]) {
                memo[i][j] = 1 + memo[i+1][j+1]
            }

            maxLength = Math.max(maxLength, memo[i][j]);
        }
    }

    // console.log(memo);
    return maxLength;
};