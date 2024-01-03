// Given a collection of candidate numbers (candidates) and a target number (target)
// find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
//     [1,2,2],
//     [5]
// ]

// Solution: Backtracking
// - sort candidates
// - create a function to find combinations
//   - base case: if target is equal to 0, push a copy of path to results
//   - loop through candidates
//     - if candidates[i] is greater than target, continue
//     - if i is greater than index and candidates[i] is equal to candidates[i-1], continue
//     - push candidates[i] to path
//     - call findCombines(i + 1, path, target - candidates[i]) for next index
//     - pop from path
// - call findCombines(0, [], target)
// - return results
// Time Complexity: O(2^n)
// Space Complexity: O(n)

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = [];

    candidates = candidates.sort((a, b) => a - b);

    const findCombines = (index, path, target) => {
        if (target === 0) {
            results.push([...path]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            // Check if the current number is greater than target
            if (candidates[i] > target) continue;
            // Check if the current number is a duplicate of the previous number
            if (i > index && candidates[i] === candidates[i-1]) continue;

            path.push(candidates[i]);
            findCombines(i + 1, path, target - candidates[i]);
            path.pop();
        }
    }

    findCombines(0, [], target);
    return results;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8)) // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2,5,2,1,2], 5)) // [[1,2,2],[5]]
console.log(combinationSum2([2,3,6,7], 7)) // [[7]]