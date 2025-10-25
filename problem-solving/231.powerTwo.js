/**
 * @param {number} n
 * @return {boolean}
 */
// TC: O(1)
// SC: O(1)
// Solution: Bit
// https://leetcode.com/problems/power-of-two/solutions/7059404/simple-trick-most-easiest-100-runtime-beat-power-of-two-check-bitwise-magic-in-o-1
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};