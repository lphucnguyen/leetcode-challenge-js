// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
// You must decrease the overall operation steps as much as possible.


// Example 1:
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

// Example 2:
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

// Solution: Binary Search
// - Use binary search to find the pivot index
//   - If nums[mid] > nums[right] => left = mid + 1
//   - Else right = mid
// - If target >= nums[left] && target <= nums[nums.length - 1]
//   - right = nums.length - 1
// - Else left = 0
// - Use binary search to find the target
// - Return the index of target
// - If not found, return -1
// Time Complexity: O(log(n))
// Space Complexity: O(1)

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const mid = Math.floor((right + left) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // Case when [1, 0, 1, 1]
        if (nums[mid] === nums[left]) {
            left++;
            continue;
        }

        if (nums[mid] >= nums[left]) {
            if (nums[mid] > target && nums[left] <= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && nums[right] >= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};