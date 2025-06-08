/**
 * @param {string}
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var scoreOfParentheses = function(s) {
    const stack = [0];

    for (const c of s) {
        if (c === '(') stack.push(0)
        else if (c === ')') {
            const current = stack.pop();

            if (current === 0) {
                stack[stack.length - 1] += 1;
            } else {
                stack[stack.length - 1] += current * 2;
            }
        }
    }

    // console.log(stack);
    return stack[0];
};