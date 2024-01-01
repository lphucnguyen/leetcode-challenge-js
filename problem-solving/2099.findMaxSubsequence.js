// You are given an integer array nums and an integer k.
// You want to find a subsequence of nums of length k that has the largest sum.
// Return any such subsequence as an integer array of length k.
// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.


// Example 1:
// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.

// Example 2:
// Input: nums = [-1,-2,3,4], k = 3
// Output: [-1,3,4]
// Explanation:
// The subsequence has the largest sum of -1 + 3 + 4 = 6.

// Example 3:
// Input: nums = [3,4,3,3], k = 2
// Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7.
// Another possible subsequence is [4, 3].

// Solution 1: Sort
// - sort nums in descending order
// - slice nums from 0 to k
// - loop through nums
//     - if item is in arr, push item to results
// - return results
// Time Complexity: O(n log n)
// Space Complexity: O(n)

var maxSubsequence = function(nums, k) {
    nums = nums.map((item, index) => [index, item]);
    const numSorted = nums.sort((a, b) => b[1] - a[1]);
    const arr = numSorted.slice(0, k);
    let results = [];

    for (const item of arr) {
        results[item[0]] = item[1];
    }
    return results.filter(item => item !== undefined);
};

console.log(maxSubsequence([3,4,3,3], 2));
console.log(maxSubsequence([-1,-2,3,4], 2));
console.log(maxSubsequence([2,1,3,3], 2));