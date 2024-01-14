// Given an integer array nums of unique elements,
// return all possible subsets(the power set).

// The solution set must not contain duplicate subsets.
// Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Solution: Backtracking
// - create a results array with an empty array inside
// - create a backtracking function which takes in an index and a path
//   - loop through from index to nums.length
//     - push path.concat(nums[i]) into results
//     - call backtracking(i + 1, path.concat(nums[i]))
// - call backtracking(0, [])
// - return results
// Time Complexity: O(n * 2^n)
// Space Complexity: O(n * 2^n)


var subsets = function(nums) {
    const results = [[]];

    const backTracking = (index, path) => {
        for (let i = index; i < nums.length; i++) {
            results.push(path.concat(nums[i]));
            backTracking(i + 1, path.concat(nums[i]));
        }
    }

    backTracking(0, []);

    return results;
};