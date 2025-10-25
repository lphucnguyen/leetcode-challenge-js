/**
 * @param {string} word
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Stack
var addMinimum = function(word) {
    let stack = ['c', 'b', 'a'], additions = 0, i = 0;

    while (stack.length > 0) {
        if (stack[stack.length - 1] !== word[i]) {
            additions++;
        } else {
            i++;
        }

        stack.pop();

        if (stack.length === 0 && i < word.length) {
            stack = ['c', 'b', 'a'];
        }
    }

    return additions;
};