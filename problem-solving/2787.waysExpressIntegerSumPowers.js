/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
// TC: O(n^2)
// SC: O(n^2)
// Solution: Memorization
var numberOfWays = function(n, x) {
    const memo = new Map(), MOD = 10**9 + 7;

    const calWays = (sum, num) => {
        if (sum === 0) return 1;
        else if (Math.pow(num, x) > sum) return 0;

        const key = `${sum}-${num}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        const pick = calWays(sum - Math.pow(num, x), num + 1);
        const notPick = calWays(sum, num + 1);

        memo.set(key, pick + notPick);

        return (pick + notPick) % MOD;
    }

    return calWays(n, 1);
};