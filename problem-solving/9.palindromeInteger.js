// Given an integer x, return true if x is a palindrome, and false otherwise.


// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Solution: Convert to String
// - convert x to string
// - reverse string
// - if string is equal to x, return true
// - return false
// - Time Complexity: O(log(n))
// - Space Complexity: O(1)


var isPalindrome = function(x) {
    const xString = x.toString();
    const reverse = xString.split('').reverse().join('');

    return xString === reverse;
};