/**
 * @param {string} s
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var minInsertions = function(s) {
    let stack = [], count = 0, i = 0;

    while (i < s.length) {
        if (s[i] === '(') {
            stack.push('(');
            i++;
        } else {
            // current is ')'
            if (i + 1 < s.length && s[i + 1] === ')') {
                // case: " )) "
                if (stack.length === 0) {
                    count++; // need a '(' before
                } else {
                    stack.pop(); // match one '('
                }
                i += 2; // skip the pair
            } else {
                // case: single ')'
                if (stack.length === 0) {
                    count += 2; // insert '(' before + one more ')' after
                } else {
                    stack.pop();
                    count++; // need one more ')'
                }
                i += 1;
            }
        }
    }

    // leftover '(' need 2 ')' each
    count += stack.length * 2;
    return count;
};