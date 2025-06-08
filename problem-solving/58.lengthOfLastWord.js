/**
 * @param {string} s
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: String
var lengthOfLastWord = function(s) {
    s = s.trim();

    // return s.split(' ').at(-1).length;
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] === ' ') {
            return s.slice(i + 1).length;
        }
    }

    return s.length;
};