// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Solution: Expand Around Center
// - loop through s (pointer)
//   - set oddLongestString to expandLongest(s, pointer, pointer)
//   - set evenLongestString to expandLongest(s, pointer, pointer + 1)
//   - if oddLongestString.length is greater than result.length, set result to oddLongestString
//   - if evenLongestString.length is greater than result.length, set result to evenLongestString
// - return result
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var longestPalindrome = function(s) {
    let result = '';

    const expandLongest = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        const oddLongestString = expandLongest(s, i, i);
        const evenLongestString = expandLongest(s, i, i + 1);

        if (oddLongestString.length > result.length) {
            result = oddLongestString;
        }
        if (evenLongestString.length > result.length) {
            result = evenLongestString;
        }
    }

    return result;
};