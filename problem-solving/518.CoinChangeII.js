/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// TC: O(n^2)
// SC: O(n^2)
// Soution: Memorization
var change = function(amount, coins) {
    const memo = new Map();

    const memorize = (sum, index) => {
        if (sum === 0) return 1;
        if (sum < 0 || index >= coins.length) return 0;

        if (memo.has(index + '-' + sum)) return memo.get(index + '-' + sum);

        let ways = memorize(sum - coins[index], index) + memorize(sum, index + 1);

        memo.set(index + '-' + sum, ways);
        return ways;
    }

    const numWay = memorize(amount, 0);
    // console.log(numWay);
    return numWay;
};