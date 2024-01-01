// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Solution: Convert to String
// - convert x to string
// - reverse string
// - convert string to number
// - if number is greater than 2^31 - 1 or less than -2^31, return 0
// - return number
// Time Complexity: O(log(n))
// Space Complexity: O(1)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const range = Math.pow(2, 31) - 1;

    let result = x.toString().split('').reverse().join('');
    result = parseInt(result);

    if (result > range || result < -range)  {
        return 0;
    }

    return (x < 0) ? -result : result;
};