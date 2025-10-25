/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Sliding Window + Hashtable
var findAnagrams = function(s, p) {
    const need = new Map(), window = new Map(), indexes = [];
    let left = 0, valid = 0;

    for (const c of p) {
        need.set(c, (need.get(c) || 0) + 1);
    }

    for (let right = 0; right < s.length; right++) {
        window.set(s[right], (window.get(s[right]) || 0) + 1);

        if (need.get(s[right]) === window.get(s[right])) {
            valid++;
        }

        if (right - left + 1 >= p.length) {
            if (valid === need.size) {
                indexes.push(left);
            }

            if (window.get(s[left]) === need.get(s[left])) {
                valid--;
            }

            window.set(s[left], window.get(s[left]) - 1);
            left++;
        }
    }

    return indexes;
};