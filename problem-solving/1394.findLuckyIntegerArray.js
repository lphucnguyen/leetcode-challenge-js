/**
 * @param {number[]} arr
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Hashtable
var findLucky = function(arr) {
    const freq = {};

    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const arrFreq = Object.entries(freq);
    arrFreq.sort((a, b) => {
        return parseInt(b[0]) - parseInt(a[0]);
    });

    for (const [num, count] of arrFreq) {
        if (parseInt(num) === count) return parseInt(num);
    }

    return -1;
};