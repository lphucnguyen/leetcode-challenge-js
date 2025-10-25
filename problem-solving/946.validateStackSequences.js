/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
// Illustrate Image: https://leetcode.com/problems/validate-stack-sequences/solutions/1853250/java-c-space-complexity-going-from-o-n-o-1
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let indexPop = 0;

    for (const num of pushed) {
        stack.push(num);

        while (stack.length && stack.at(-1) === popped[indexPop]) {
            indexPop++;
            stack.pop();
        }
    }

    // console.log(stack);
    return stack.length === 0;
};