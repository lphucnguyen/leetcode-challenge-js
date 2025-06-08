/**
 * @param {string} s
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Greedy
var maxOperations = function(s) {
    let ones = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') ones++;
        // Choose any index i from the string where i + 1 < s.length such that s[i] == '1' and s[i + 1] == '0'.
        // if s[i] === 0 and s[i - 1] === '1' is satisfy the above condition
        else if (i > 0 && s[i - 1] === '1') result += ones;
    }

    return result;
};