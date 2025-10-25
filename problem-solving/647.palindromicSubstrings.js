/**
 * @param {string} s
 * @return {number}
 */
// TC: O(n^2)
// SC: O(1)
// Solution: Two Pointer
var countSubstrings = function(s) {
    let count = 0;

    const isPalindromic = (left, right) => {
        while (left <= right) {
            if (s[left++] !== s[right--]) {
                return false;
            }
        }

        return true;
    }

    for (let left = 0; left < s.length; left++) {
        for (let right = left; right < s.length; right++) {
            if (isPalindromic(left, right)) {
                count++;
            }
        }
    }

    // console.log(count);
    return count;
};