// A message containing letters from A-Z can be encoded into numbers using the following mapping:
//     'A' -> "1"
//     'B' -> "2"
//     ...
//     'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
//     "AAJF" with the grouping (1 1 10 6)
//     "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
// Given a string s containing only digits, return the number of ways to decode it.
// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:
// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

// Solution: Dynamic Programming with Memoization
// - Create a memoization array to store the number of ways to decode the string from the current index
// - If the current index is the length of the string, return 1
// - If the current index is already calculated, return the value
// - If the current index is 0, return 0
// - Calculate the number of ways to decode the string from the current index
// - If the current index and the next index is less than or equal to 26, add the number of ways to decode the string from the next index
// - Save the number of ways to decode the string from the current index
// - Return the number of ways to decode the string from the first index
// Time complexity: O(n)
// Space complexity: O(n)


var numDecodings = function(s) {
    // 1. Create a memoization array to store the number of ways to decode the string from the current index
    const memo = new Array(s.length).fill(-1);

    const decode = (index) => {
        // 1. If the current index is the length of the string, return 1
        if (index === s.length) return 1;

        // 2. If the current index is already calculated, return the value
        if (memo[index] !== -1) return memo[index];

        // 3. If the current index is 0, return 0
        if (s[index] === '0') return 0;

        // 4. Calculate the number of ways to decode the string from the current index
        let ways = decode(index + 1);

        // 5. If the current index and the next index is less than or equal to 26, add the number of ways to decode the string from the next index
        if (index < s.length - 1 && parseInt(s.substring(index, index + 2)) <= 26) {
            ways += decode(index + 2);
        }

        // console.log(s.substring(0, index) + " " + s.substring(index) + " " + ways);

        // 6. Save the number of ways to decode the string from the current index
        memo[index] = ways;
        return ways;
    }

    return decode(0);
};

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("06")); // 0