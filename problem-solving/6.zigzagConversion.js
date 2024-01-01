// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// Solution 1: Brute Force
// - Create a results array with numRows number of empty strings
// - Create a direction variable that is false
// - Create a position variable that is 0
// - If numRows is 1, return s
// - Loop through s
//     - Add character to results[position]
//     - If position is 0 or position is numRows - 1, direction is not direction
//     - If direction is true, position++
//     - Else position--
// - Return results joined

// Time Complexity: O(n)
// Space Complexity: O(n)

var convert = function(s, numRows) {
    const results = new Array(numRows).fill('');
    let direction = false;
    let position = 0;

    if (numRows === 1) return s;

    for (const character of s) {
        results[position] += character;

        if (position === 0 || position === numRows - 1) direction = !direction;
        direction ? position++ : position--;
    }

    return results.join('');
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));