/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Sliding Window
var equalSubstring = function(s, t, maxCost) {
    let max = 0, left = 0, total = 0;

    for (let right = 0; right < s.length; right++) {
        total += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

        while (total > maxCost) {
            total -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;
};