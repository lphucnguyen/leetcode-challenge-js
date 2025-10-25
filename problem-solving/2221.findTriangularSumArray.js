/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Array (using a temporary array)
var triangularSum = function(nums) {
    if (nums.length === 1) return nums[0];

    const newNums = new Array(nums.length).fill(0);

    while (newNums.length > 1) {
        for (let i = 0; i < newNums.length - 1; i++) {
            newNums[i] = (nums[i] + nums[i + 1]) % 10;
        }

        for (let i = 0; i < newNums.length; i++) {
            nums[i] = newNums[i];
        }

        newNums.pop();
    }

    // console.log(newNums);
    return newNums[0];
};