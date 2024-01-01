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
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

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