/**
 * @param {string} s
 * @return {boolean}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var isValid = function(s) {
    // Recursive
    // while (s.length) {
    //     const index = s.indexOf('abc');

    //     if (index === -1) {
    //         break;
    //     }

    //     s = s.replaceAll('abc', '');
    // }

    // return s.length === 0;

    const stack = [];

    // Using Stack, solution 1
    for (const c of s) {
        stack.push(c);

        if (stack.length >= 3 && stack.at(-3) + stack.at(-2) + stack.at(-1) === 'abc') {
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }

    // Using Stack, solution 2
    // for (const c of s) {
    //     if (c === 'c') {
    //         const second = stack.pop();
    //         const first = stack.pop();

    //         if (second !== 'b' || first !== 'a') {
    //             return false;
    //         }
    //     } else {
    //         stack.push(c);
    //     }
    // }

    return stack.length === 0;
};