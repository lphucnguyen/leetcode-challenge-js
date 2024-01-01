// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:
// Input: candidates = [2], target = 1
// Output: []

// Solution: Backtracking
// - sort candidates in ascending order
// - create a results array
// - create a function findCombination (index, target, path)
//   - if target is 0, push a copy of path to results
//   - if target is less than 0, return
//   - loop through candidates starting from index
//     - push candidates[i] to path
//     - subtract candidates[i] from target
//     - call findCombination(i, target, path)
//     - add candidates[i] to target
//     - pop from path
// - call findCombination(0, target, [])
// Time Complexity: O(n^target), n is the length of candidates
// Space Complexity: O(n)


var combinationSum = function(candidates, target) {
    const results = [];

    if (target > 150) return results;

    const findCombination = (index, target, path) => {
        if (target === 0) results.push([...path]);
        if (target < 0) return;

        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);
            target -= candidates[i];
            findCombination(i, target, path);

            target += candidates[i];
            path.pop();
        }
    }

    findCombination(0, target, []);

    return results;
};