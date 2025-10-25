/**
 * @param {number} n
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var clumsy = function(n) {
    const stack = [n], facts = ['*', '/', '+', '-'];
    let indexFact = 0;

    for (let i = n - 1; i >= 1; i--) {
        if (facts[indexFact] === '*') {
            const top = stack.pop();

            stack.push(top * i);
        } else if (facts[indexFact] === '/') {
            const top = stack.pop();

            stack.push(top > 0 ? Math.floor(top / i) : Math.ceil(top / i));
        } else if (facts[indexFact] === '-') {
            stack.push(-i);
        } else {
            stack.push(i);
        }

        indexFact = (indexFact + 1) % 4;
    }

    return stack.reduce((sum, item) => sum + item, 0);
};