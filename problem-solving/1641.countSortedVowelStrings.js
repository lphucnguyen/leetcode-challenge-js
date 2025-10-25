/**
 * @param {number} n
 * @return {number}
 */
// TC: O(5^n)
// SC: O(1)
// Solution: Backtracking
var countVowelStrings = function(n) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    const backtrack = (index, vowelString) => {
        if (vowelString.length === n) {
            count++;
            return;
        }

        for (let i = index; i < vowels.length; i++) {
            backtrack(i, vowelString + vowels[i]);
        }
    }

    backtrack(0, '');

    return count;
};