/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
// https://leetcode.com/problems/remove-k-digits/solutions/5005947/2-easy-interview-approaches-without-stack-with-stack-beat-99-59-simple-approach
var removeKdigits = function(num, k) {
    const stack = [];

    for (const digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }

        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let ans = "";
    for (const digit of stack) {
        if (ans.length === 0 && digit === '0') continue;
        ans += digit;
    }

    return ans.length === 0 ? '0' : ans;
};