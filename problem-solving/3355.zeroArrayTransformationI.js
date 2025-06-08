/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
// TC: O(n)
// SC: O(n)
// Solution: Prefix Sum
var isZeroArray = function(nums, queries) {
    const deltas = new Array(nums.length + 1).fill(0);
    for (const [left, right] of queries) {
        deltas[left] += 1;
        deltas[right + 1] -= 1;
    }

    // console.log(deltas);

    const counts = [];
    let currentOperation = 0;
    for (const delta of deltas) {
        currentOperation += delta;
        counts.push(currentOperation);
    }

    // console.log(counts);

    for (let i = 0; i < nums.length; i++) {
        if (counts[i] < nums[i]) {
            return false;
        }
    }

    return true;
};