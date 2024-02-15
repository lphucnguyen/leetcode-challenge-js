// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// Custom Judge:
// The judge will test your solution with the following code:
    // int[] nums = [...]; // Input array
    // int[] expectedNums = [...]; // The expected answer with correct length
    // int k = removeDuplicates(nums); // Calls your implementation

    // assert k == expectedNums.length;
    // for (int i = 0; i < k; i++) {
    //     assert nums[i] == expectedNums[i];
    // }

// If all assertions pass, then your solution will be accepted.


// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Solution: Two Pointers
// - Initialize two pointers use left pointer to swap number
// - Left pointer starts at 2
// - Use right pointer to count the duplicate items
// - Right pointer starts at 2
// - Swap the next two elements if nums at right is not equal to nums at left - 2
// - Return the left pointer
// Time complexity: O(n)
// Space complexity: O(1)

var removeDuplicates = function(nums) {
    // Initialize two pointers use left pointer to swap number
    // Left pointer starts at 2
    let left = 2;

    // Use right pointer to count the duplicate items
    // Right pointer starts at 2
    for (let right = 2; right < nums.length; right++) {
        // Swap the next two elements if nums at right is not equal to nums at left - 2
        if (nums[right] !== nums[left - 2]) {
            nums[left] = nums[right];
            left++;
        }
    }

    // return the left pointer
    return left;

    // // Initialize two pointers
    // let left = 0;
    // let right = 0;

    // // Use right pointer to count the duplicate items
    // while (right < nums.length) {
    //     let count = 1;

    //     // Count the duplicate items
    //     while (right + 1 < nums.length && nums[right] === nums[right + 1]) {
    //         right++;
    //         count++;
    //     }

    //     let min = Math.min(count, 2);
    //      // Swap the next two elements if count is 2 or grater than 2
    //     for (let i = 0; i < min; i++) {
    //         nums[left] = nums[right];
    //         left++;
    //     }

    //     right++;
    // }

    // return left;
};

console.log(removeDuplicates([1,1,1,2,2,3])); // 5
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3])); // 7
console.log(removeDuplicates([1,2,3])); // 3