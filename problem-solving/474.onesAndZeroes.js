/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// TC: O(lens(strs) * m * n)
// SC: O(n)
// Solution: Memorization
var findMaxForm = function(strs, m, n) {
    const memo = new Map();

    const countBits = (str) => {
        let zeros = 0, ones = 0;

        for (const c of str) {
            if (c === '0') zeros++;
            else ones++;
        }

        return [zeros, ones];
    };

    const memorize = (index, zeros, ones) => {
        if (index === strs.length) return 0;

        const key = `${index}-${zeros}-${ones}`;

        if (memo.has(key)) return memo.get(key);

        let take = 0, skip = 0;

        const [zero, one] = countBits(strs[index]);
        if (zero <= zeros && one <= ones) {
            take = 1 + memorize(index + 1, zeros - zero, ones - one);
        }

        skip = memorize(index + 1, zeros, ones);

        const max = Math.max(take, skip);
        memo.set(key, max);

        return max;
    }

    return memorize(0, m, n);
};