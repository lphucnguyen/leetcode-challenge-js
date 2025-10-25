/**
 * @param {string} s
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
// Split string to array, don't use slice to remove character, because i from 0 to s.length
var minRemoveToMakeValid = function(s) {
    const stack = [], splitS = s.split('');

    for (let i = 0; i < splitS.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (!stack.length) {
                splitS[i] = '';
            } else {
                stack.pop();
            }
        }
    }

    for (const index of stack) {
        splitS[index] = '';
    }

    return splitS.join('');
};