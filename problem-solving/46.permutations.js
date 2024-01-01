// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Solution 1: Backtracking
// - check if permutes length is equal to nums length, if so, push permutes to results
// - else, loop through nums
//     - if permutes includes num, continue
//     - push num to permutes
//     - call findPermute(nums, permutes)
//     - pop num from permutes
// - return results
// Time Complexity: O(n!)
// Space Complexity: O(n!)

var permute = function(nums) {
    const results = [];

    const findPermute = (nums, permutes) => {
        if (permutes.length === nums.length) results.push([...permutes]);
        else {
            for (const num of nums) {
                if (permutes.includes(num)) continue
                permutes.push(num);
                findPermute(nums, permutes);
                permutes.pop();
            }
        }
    }

    findPermute(nums, []);

    return results;
};