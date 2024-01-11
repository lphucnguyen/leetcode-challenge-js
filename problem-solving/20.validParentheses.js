// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Solution: Stack
// - use a stack to store the opening brackets
// - if the current character is an opening bracket, push it onto the stack
// - if the current character is a closing bracket, pop the topmost element from the stack and compare it with the current character
//   - if the stack is empty, return false
//   - if the popped element is not an opening bracket of the same type, return false
// - after iterating through the string, if the stack is not empty, return false
// - otherwise, return true
// Time Complexity: O(n)
// Space Complexity: O(n)

var isValid = function(s) {
    const stack = [];

    for (let str of s) {
        // If the current character is an opening bracket, push it onto the stack
        if (str === '(') {
            stack.push(')');
        }
        else if (str === '[') {
            stack.push(']');
        }
        else if (str === '{') {
            stack.push('}');
        }
        // If the current character is a closing bracket, pop the topmost element from the stack
        // and compare it with the current character
        // stack.length === 0 that means stack is empty return false
        else if (stack.length === 0 || stack.pop() !== str) {
            return false;
        }
    }

    // If the stack still contains elements, then it is an invalid expression
    return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false