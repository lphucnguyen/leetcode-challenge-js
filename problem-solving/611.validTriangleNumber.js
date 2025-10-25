/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n^2)
// SC: O(1)
// Solution: Two Pointer
var triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);

    for (let i = nums.length - 1; i >= 2; i--) {
        let left = 0, right = i - 1;

        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                count += right - left;
                right--;
            } else {
                left++;
            }
        }
    }

    // console.log(count);
    return count;
};