/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var maximumGain = function(s, x, y) {
    const removePair = (s, first, second, score) => {
        let stack = [], total = 0;

        for (const c of s) {
            if (stack.length && c == second && stack[stack.length - 1] === first) {
                stack.pop();
                total += score;
            } else {
                stack.push(c);
            }
        }

        return [stack.join(''), total];
    }

    let total = 0;

    if (x > y) {
        const [s1, p1] = removePair(s, 'a', 'b', x);
        const [rest, p2] = removePair(s1, 'b', 'a', y);

        total = p1 + p2;
    } else {
        const [s1, p1] = removePair(s, 'b', 'a', y);
        const [rest, p2] = removePair(s1, 'a', 'b', x);

        total = p1 + p2;
    }

    return total;
};