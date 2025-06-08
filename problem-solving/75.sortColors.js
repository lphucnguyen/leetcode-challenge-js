// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Explanation:
// [ 0, 0, 2, 1, 1, 2 ]
// Left:0, Right:4, i:0
// [ 0, 0, 2, 1, 1, 2 ]
// Left:1, Right:4, i:1
// [ 0, 0, 2, 1, 1, 2 ]
// Left:2, Right:4, i:2
// [ 0, 0, 1, 1, 2, 2 ]
// Left:2, Right:3, i:2
// [ 0, 0, 1, 1, 2, 2 ]
// Left:2, Right:3, i:3
// [ 0, 0, 1, 1, 2, 2 ]
// Left:2, Right:3, i:4

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
// Explanation:
// [ 1, 0, 2 ]
// Left:0, Right:1, i:0
// [ 1, 0, 2 ]
// Left:0, Right:1, i:1
// [ 0, 1, 2 ]
// Left:1, Right:1, i:2

// Example 3:
// Input: nums = [2,0,2,1,1,2,2,0,1,0]
// Output: [0,0,0,1,1,1,2,2,2,2]
// Explanation:
// [
//     0, 0, 2, 1, 1, 2, 2, 0, 1, 2
// ]
// Left:0, Right:8, i:0
// [
//     0, 0, 2, 1, 1, 2, 2, 0, 1, 2
// ]
// Left:1, Right:8, i:1
// [
//     0, 0, 2, 1, 1, 2, 2, 0, 1, 2
// ]
// Left:2, Right:8, i:2
// [
//     0, 0, 1, 1, 1, 2, 2, 0, 2, 2
// ]
// Left:2, Right:7, i:2
// [
//     0, 0, 1, 1, 1, 2, 2, 0, 2, 2
// ]
// Left:2, Right:7, i:3
// [
//     0, 0, 1, 1, 1, 2, 2, 0, 2, 2
// ]
// Left:2, Right:7, i:4
// [
//     0, 0, 1, 1, 1, 2, 2, 0, 2, 2
// ]
// Left:2, Right:7, i:5
// [
//     0, 0, 1, 1, 1, 0, 2, 2, 2, 2
// ]
// Left:2, Right:6, i:5
// [
//     0, 0, 0, 1, 1, 1, 2, 2, 2, 2
// ]
// Left:3, Right:6, i:6
// [
//     0, 0, 0, 1, 1, 1, 2, 2, 2, 2
// ]
// Left:3, Right:5, i:6


var sortColors = function(nums) {
    // Initialize two pointers
    // Use left pointer to move all 0 to the left
    // Use right pointer to move all 2 to the right
    let left = 0;
    let right = nums.length - 1;

    let i = 0;

    while (i <= right) {
        // Swap the i and left if nums at i is 0
        // Move all 0 to the left
        if (nums[i] === 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
            i++;
        }
        // Swap the i and right if nums at i is 2
        // Move all 2 to the right
        else if (nums[i] === 2) {
            [nums[right], nums[i]] = [nums[i], nums[right]];
            right--;
        }
        // Move i to the right if nums at i is 1
        // Move all 1 to the middle
        else {
            i++;
        }
        // console.log(nums);
        // console.log("Left:" + left + ", Right:" + right + ", i:" + i);
    }

    // Solution 2: Hashtable + Sorting
    // TC: O(n)
    // SC: O(1)
    const count = {0: 0, 1: 0, 2: 0};

    for (const num of nums) {
        count[num]++;
    }

    let index = 0;
    for (let i = 0; i < 3; i++) {
        const freq = count[i];

        for (let j = 0; j < freq; j++) {
            nums[index] = i;
            index++;
        }
    }

    return nums;
};

console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log(sortColors([2,0,1])); // [0,1,2]
console.log(sortColors([2,0,2,1,1,2,2,0,1,0])); // [0,0,0,1,1,1,2,2,2,2]
console.log(sortColors([0])); // [0]