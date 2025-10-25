/**
 * @param {string} s
 * @return {number}
 */
// TC: O(n^2)
// SC: O(n^2)
// Solution: Memorization
var longestPalindromeSubseq = function(s) {
    // const memo = new Map();

    // const memorize = (left, right) => {
    //     if (left > right) return 0;
    //     else if (left === right) return 1;

    //     const key = `${left}-${right}`;

    //     if (memo.has(key)) return memo.get(key);

    //     let max = 0;
    //     if (s[left] === s[right]) {
    //         max = 2 + memorize(left + 1, right - 1);
    //     } else {
    //         max = Math.max(memorize(left + 1, right), memorize(left, right - 1));
    //     }

    //     memo.set(key, max);

    //     return max;
    // }

    // return memorize(0, s.length - 1);

    const length = s.length;
    const dp = new Array(length).fill(0).map(() => new Array(length).fill(0));

    for (let i = 0; i < length; i++) {
        dp[i][i] = 1;
    }

    for (let end = 1; end < length; end++) {
        for (let start = end - 1; start >= 0; start--) {
            if (s[start] === s[end]) {
                dp[start][end] = dp[start + 1][end - 1] + 2;
            } else {
                dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);

            }
        }

    }

    return dp[0][length - 1];
};