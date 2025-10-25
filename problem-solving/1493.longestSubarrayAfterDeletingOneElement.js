/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Sliding Window
var longestSubarray = function(nums) {
    let numZero = 0, start = 0, maxLength = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) {
            numZero++;
        }

        // Remaining the window always have a zero element
        while (numZero > 1) {
            if (nums[start] === 0) numZero--;
            start++;
        }

        maxLength = Math.max(maxLength, end - start);
    }

    return maxLength;
};