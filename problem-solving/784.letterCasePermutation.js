/**
 * @param {string} s
 * @return {string[]}
 */
// TC: O(2^n)
// SC: O(n)
// Solution: Backtracking
var letterCasePermutation = function(s) {
    // const results = [];

    // const backtrack = (permutation, index) => {
    //     if (index === s.length) {
    //         results.push(permutation);
    //         return;
    //     }

    //     if (/[0-9]/.test(s[index])) {
    //         backtrack(permutation + s[index], index + 1);
    //     } else {
    //         backtrack(permutation + s[index].toLowerCase(), index + 1);
    //         backtrack(permutation + s[index].toUpperCase(), index + 1);
    //     }
    // }

    // backtrack('', 0);

    // return results;

    // Another solution
    const results = new Set();

    const backtrack = (permutation, index) => {
        if (index === s.length) {
            results.add(permutation);
            return;
        }

        backtrack(permutation + s[index].toLowerCase(), index + 1);
        backtrack(permutation + s[index].toUpperCase(), index + 1);
    }

    backtrack('', 0);

    return [...results];
};