/**
 * @param {string} s
 * @param {number[]} order
 * @param {number} k
 * @return {number}
 */
// TC: O(logn)
// SC: O(1)
// Solution: Binary Search
var minTime = function(s, order, k) {
    const n = s.length;
    const totalSubstring = (n * (n + 1)) / 2;

    const isActive = (t) => {
        const chars = s.split('');

        for (let i = 0; i <= t; i++) {
            chars[order[i]] = '*';
        }

        let invalid = 0, countInvalid = 0;

        for (const c of chars) {
            if (c !== '*') {
                invalid++;
            } else if (c === '*' && invalid > 0) {
                countInvalid += (invalid * (invalid + 1)) / 2;
                invalid = 0;
            }
        }

        if (invalid > 0) {
            countInvalid += (invalid * (invalid + 1)) / 2;
            invalid = 0;
        }

        const valid = totalSubstring - countInvalid;
        return valid >= k;
    }

    // Binary Search from [0, s.length] to find the active position
    let left = 0, right = n - 1, result = -1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (isActive(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};