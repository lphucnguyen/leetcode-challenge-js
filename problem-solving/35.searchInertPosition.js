// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity. (Binary Search)


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
// - Set the left pointer to 0 and the right pointer to the length of the array minus 1
// - While the left pointer is less than or equal to the right pointer
// - Calculate the middle index
// - If the middle value is equal to the target, return the middle index
// - If the middle value is less than the target, set the left pointer to the middle index plus 1
// - If the middle value is greater than the target, set the right pointer to the middle index minus 1
// - Return the right pointer plus 1
// Time complexity: O(log n)
// Space complexity: O(1)


var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const mid = right - left;

        if (nums[mid] === target) return mid;
        else if(nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return right + 1;
};

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0