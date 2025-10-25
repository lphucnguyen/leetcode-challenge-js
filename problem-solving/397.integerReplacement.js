/**
 * @param {number} n
 * @return {number}
 */
// TC: O(logn), because memo store [1, n]
// SC: O(logn)
// Solution: Memorization
var integerReplacement = function(n) {
    const memo = {};

    const memorize = (n) => {
        if (n === 1) return 0;

        if (memo[n]) return memo[n];

        let steps = 0;
        if (n % 2 === 0) {
            steps = 1 + memorize(Math.floor(n / 2));
        } else {
            steps = 1 + Math.min(memorize(n - 1), memorize(n + 1));
        }

        memo[n] = steps;

        return memo[n];
    }

    return memorize(n);
};