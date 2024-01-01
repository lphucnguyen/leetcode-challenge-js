// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// Solution: Sort
// - sort nums in descending order and remove duplicates by using Set
// - if nums.length is greater than or equal to 3, return nums at 2nd position
// - otherwise, return nums at 0th position
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var thirdMax = function(nums) {
    let numsSorted = [...new Set(nums.sort((a, b) => b - a))];

    if (numsSorted.length >= 3) {
        return numsSorted.at(2);
    }else return numsSorted.at(0);
};

console.log(thirdMax([1,2,2,5,3,5]));