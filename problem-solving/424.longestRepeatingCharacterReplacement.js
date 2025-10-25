/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: HashTable + Sliding Window
var characterReplacement = function(s, k) {
    const freq = {};
    let maxCount = 0, maxLength = 0, left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        freq[char] = (freq[char] || 0) + 1;
        maxCount = Math.max(maxCount, freq[char]);

        // Move sliding window if satisfy this condition
        // Ex: AABA -> maxCount = 3, k = 1, right = 3, left = 0 -> 4 - 3 == 1 -> don't move
        // AABAB -> maxCount = 3, k = 1, right = 4, left = 0 -> 5 - 3 = 2 > 1 -> move, because we need 2 operations to change B -> A to make longest substring
        if (right - left + 1 - maxCount > k) {
            freq[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};