/**
 * @param {string} s
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var reverseParentheses = function(s) {
    let reverse = '', stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '(' && s[i] !== ')') {
            reverse += s[i];
        } else if (s[i] === '(') {
            stack.push(reverse);
            reverse = '';
        } else if (s[i] === ')') {
            reverse = stack.pop() + reverse.split('').reverse().join('');
        }
    }

    // console.log(reverse);
    return reverse;
};