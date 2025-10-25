/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Sliding Window
var countCompleteSubarrays = function(nums) {
    const setNum = new Set(nums);
    const countNums = new Map();
    let count = 0, left = 0;

    for (let right = 0; right < nums.length; right++) {
        countNums.set(nums[right], (countNums.get(nums[right]) || 0 ) + 1);

        while (countNums.size === setNum.size) {
            // Get count subarray includes all distnct num
            // Ex: [1,3,1,2] and [1,3,1,2,2]
            count += nums.length - right;

            countNums.set(nums[left], countNums.get(nums[left]) - 1);
            if (countNums.get(nums[left]) === 0) {
                countNums.delete(nums[left]);
            }
            left++;
        }
    }

    return count;
};