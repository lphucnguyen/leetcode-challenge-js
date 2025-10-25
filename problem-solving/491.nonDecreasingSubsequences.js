/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC: O(2^n)
// SC: O(n)
// Solution: Backtracking
var findSubsequences = function(nums) {
    const subSequences = new Set();

    const backtrack = (path, index) => {
        if (path.length >= 2) {
            subSequences.add(path.join(','));
        }

        for (let i = index; i < nums.length; i++) {
            if (path.length === 0 || nums[i] >= path.at(-1)) {
                backtrack([...path, nums[i]], i + 1);
            }
        }
    }

    backtrack([], 0);

    // console.log([...subSequences].map(sequence => sequence.split(',')));
    return [...subSequences].map(sequence => sequence.split(',').map(Number));
};