/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TC: O(n)
// SC: O(n)
// Solution: Hashtable
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const freqT = new Map(), freqS = new Map();
    let valid = 0;

    for (const c of t) {
        freqT.set(c, (freqT.get(c) || 0) + 1);
    }

    for (const c of s) {
        freqS.set(c, (freqS.get(c) || 0) + 1);

        if (freqS.get(c) === freqT.get(c)) {
            valid++;
        }
    }

    return valid === freqT.size;
};