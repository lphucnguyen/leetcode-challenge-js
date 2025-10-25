/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const freq = {};

    for (let i = 0; i < word1.length; i++) {
        freq[word1[i]] ? freq[word1[i]]++ : freq[word1[i]] = 1;
        freq[word2[i]] ? freq[word2[i]]-- : freq[word2[i]] = -1;
    }

    for (const c in freq) {
        if (freq[c] < -3 || freq[c] > 3) return false;
    }

    return true;
};