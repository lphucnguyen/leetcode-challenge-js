// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Solution: Backtracking
// - create a hash map of digits to letters
// - create a results array
// - create a backtracking function
//     - if path.length === digits.length, push path.join('') into results
//     - create a digit variable and set it to letter[digits[index]]
//     - loop through digit
//         - call backtracking function with index + 1, path.concat(d)
// - call backtracking function with 0, []
// - return results
// Time Complexity: O(4^n)
// Space Complexity: O(1)


var letterCombinations = function(digits) {
    const letter = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };

    const results = [];

    const backTracking = (index, path) => {
        if (path.length === digits.length) {
            results.push(path.join(''));
            return;
        }

        const digit = letter[digits[index]];

        for (const d of digit) {
            backTracking(index + 1, path.concat(d))
        }
    }

    if (digits === "") return results;

    backTracking(0, []);
    return results;
};