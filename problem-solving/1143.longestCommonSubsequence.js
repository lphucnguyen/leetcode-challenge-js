// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.


// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Solution: Dynamic Propgramming
// - Create a dp array with one extra row and column
// - Loop through the dp array
//     - If the letters are the same, add 1 to the previous diagonal value
//     - If the letters are not the same, take the max of the previous row or column
// - Return the last value in the dp array
// Time Complexity: O(n*m)
// Space Complexity: O(n*m)


var longestCommonSubsequence = function(text1, text2) {
    const n1 = text1.length;
    const n2 = text2.length;
    let dp = new Array(n1+1).fill(0).map(() => new Array(n2+1).fill(0));

    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            // If the letters are the same, add 1 to the previous diagonal value
            if (text1[i - 1] === text2[j - 1]) {
                // Add 1 to the previous diagonal value
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                // If the letters are not the same, take the max of the previous row or column
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    return dp[n1][n2];
};