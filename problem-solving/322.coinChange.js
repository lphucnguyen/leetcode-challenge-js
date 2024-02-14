// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.


// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Example 4:
// Input: coins = [1, 2], amount = 4
// Output: 0

//                 4
//          -1 /       \ -2
//            3         2
//        -1 /  \ -2     \ -2
//         2     1        0
//     -1 /       \ -2
//       1         -1
//   -1 /
//     0
// If amount === 0, you reach the end of the tree, found a solution
// if amount < 0, there is no solution for this path, and set number of coins you need is Infinity.
// Loop through each coin type, recursively call the function.
// If you look at the graph above, we repeat calculated when the amount equal to 2 and 1, if we cache or memorize the result of those, we can quickly return the answer.
// Because it want to return -1 if there is no answer, we handle this outside our recursive call.


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = {};

    const dfs = (amount) => {
        if (amount === 0) return 0;
        if (amount < 0) return Infinity;
        if (memo[amount]) return memo[amount];

        let min = Infinity;

        for (const coin of coins) {
            const resAmount = amount - coin;

            min = Math.min(dfs(resAmount) + 1, min);
        }

        memo[amount] = min;
        return memo[amount];
    }

    let result = dfs(amount);
    return result === Infinity ? -1 : result;
};

console.log(coinChange([1,2,5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1, 2], 4)); // 2