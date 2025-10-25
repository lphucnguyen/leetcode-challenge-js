/**
 * @param {string} word
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Sliding Window
var longestBeautifulSubstring = function(word) {
    let left = 0, vowels = new Set(), longest = 0;

    for (let right = 0; right < word.length; right++) {
        if (right > 0 && word[right] < word[right - 1]) {
            left = right;
            vowels.clear();
        }

        vowels.add(word[right]);

        if (vowels.size === 5) {
            longest = Math.max(longest, right - left + 1);
        }
    }

    // console.log(longest);
    return longest;
};