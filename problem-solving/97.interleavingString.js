// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
// An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
// substrings respectively, such that:
//     s = s1 + s2 + ... + sn
//     t = t1 + t2 + ... + tm
//     |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Example 1:
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.

// Example 2:
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

// Example 3:
// Input: s1 = "", s2 = "", s3 = ""
// Output: true

// Solution: Recursion + Memoization
// - Create a variable n and set it to the length of s1.
// - Create a variable m and set it to the length of s2.
// - If the sum of n and m is not equal to the length of s3, return false.
// - Create a memoization map.
// - Create a recursive function dfs that takes i, j, and k as arguments.
// - If k is equal to the length of s3, return true.
// - Create a key variable and set it to the string representation of i and j separated by a hyphen.
// - If the memoization map contains the key, return the value of the key.
// - Create a variable result and set it to false.
// - If i is less than n and s1[i] is equal to s3[k], set result to the result of dfs(i + 1, j, k + 1).
// - If j is less than m and s2[j] is equal to s3[k], set result to the result of dfs(i, j + 1, k + 1).
// - Set the value of the key to result and return result.
// - Return the result of dfs with i, j, and k as arguments.
// - Time complexity: O(n * m)
// - Space complexity: O(n * m)

var isInterleave = function(s1, s2, s3) {
    const n = s1.length;
    const m = s2.length;

    if (m + n !== s3.length) return false;

    const memo = new Map();

    const dfs = (i, j, k) => {
        if (k === s3.length) {
            return true;
        }

        const key = `${i}-${j}`;
        if (memo.has(key)) return memo.get(key);

        let result = false;
        if (i < n && s1[i] === s3[k]){
            result = result || dfs(i+1, j, k+1);
        }
        if (j < m && s2[j] === s3[k]){
            result = result || dfs(i, j+1, k+1);
        }

        memo.set(key, result);
        return result;
    }

    return dfs(0, 0, 0);
};