// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Solution: Binary Search
// - set left to 0, right to nums.length - 1
// - loop while left is smaller than or equal to right
//   - set mid to right - left
//   - if nums[mid] is equal to target, return mid
//   - if nums[mid] is smaller than target, set left to mid + 1
//   - otherwise, set right to mid - 1
// - return right + 1
// Time Complexity: O(logn)
// Space Complexity: O(1)

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while(left <= right) {
        mid = right - left;

        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return right + 1;
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));