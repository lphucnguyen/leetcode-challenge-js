/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// TC: O(n*m)
// SC: O(n*m)
// Solution: Memorization
var minDistance = function(word1, word2) {
    // const memo = new Map();

    // // We need to count the maximum number of same character
    // // Calcuate the sum the different character of word1 and word2
    // const countSameCharacter = (index1, index2) => {
    //     if (index1 >= word1.length || index2 >= word2.length) return 0;

    //     const key = `${index1}-${index2}`;
    //     if (memo.has(key)) {
    //         return memo.get(key);
    //     }

    //     let max = 0;
    //     if (word1[index1] === word2[index2]) {
    //         max = 1 + countSameCharacter(index1 + 1, index2 + 1);
    //     } else {
    //         max = Math.max(countSameCharacter(index1 + 1, index2), countSameCharacter(index1, index2 + 1));
    //     }

    //     memo.set(key, max);
    //     return max;
    // }

    // const countSame = countSameCharacter(0, 0);
    // return (word1.length - countSame) + (word2.length - countSame);

    const m = word1.length, n = word2.length;
    const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return (word1.length - dp[m][n]) + (word2.length - dp[m][n])
};