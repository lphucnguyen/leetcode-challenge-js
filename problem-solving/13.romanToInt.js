// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Solution: One Pass
// - create a variable result
// - create a variable roman
// - loop through s
//   - if roman[s[i]] is smaller than roman[s[i+1]]
//     - subtract roman[s[i]] from result
//   - otherwise
//     - add roman[s[i]] to result
// - return result
// Time Complexity: O(n)
// Space Complexity: O(1)

var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i+1]]) {
            result -= roman[s[i]];
        }
        else result += roman[s[i]];
    }

    return result;
};

console.log(romanToInt("MCMXCIV"));