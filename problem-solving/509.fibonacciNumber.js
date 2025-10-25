/**
 * @param {number} n
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: DP
var fib = function(n) {
    const f = new Array(n + 1).fill(0);
    f[0] = 0;
    f[1] = 1;

    if (n < 2) return f[n];

    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
};