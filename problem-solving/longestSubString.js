// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let longestString = 0;
    let left = right = 0;
    const set = new Set();

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            longestString = Math.max(longestString, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }

    return longestString;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));