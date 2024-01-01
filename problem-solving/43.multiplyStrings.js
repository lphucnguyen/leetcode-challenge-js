// Given two non-negative integers num1 and num2 represented as strings,
// return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"

// Solution: Math
// - create a result array with length of num1 + num2, fill with 0
// - loop through num1 from right to left
//   - loop through num2 from right to left
//     - multiply num1[i] and num2[j]
//     - add to result[i+j+1]
//     - add to result[i+j]
// - loop through result
//   - if result[i] is not 0, return result[i] to the end of array
// - return '0'
// Time Complexity: O(n^2)
// Space Complexity: O(n)

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let result = new Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1;i >= 0; i--) {
        for (let j = num2.length - 1;j >= 0; j--) {
            result[i+j+1] += parseInt(num1[i]) * parseInt(num2[j]);
            result[i+j] += Math.floor(result[i+j+1] / 10);
            result[i + j + 1] %= 10;
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] !== 0) return result.splice(i).join('');
    }

    return '0';
};