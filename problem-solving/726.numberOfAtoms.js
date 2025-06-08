/**
 * @param {string} formula
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack + HashTable
// https://leetcode.com/problems/number-of-atoms/editorial (See the slide to understand)
var countOfAtoms = function(formula) {
    const isDigit = (digit) => digit >= '0' && digit <= '9';
    const isUpperCase = (character) => character >= 'A' && character <= 'Z';
    const isLowerCase = (character) => character >= 'a' && character <= 'z';

    let i = 0;
    const stack = [{}];

    while (i < formula.length) {
        const character = formula[i];

        if (character === '(') {
            stack.push({});
            i++;
        }
        // Multiply of atom in the bracket
        else if (character === ')') {
            i++;

            let multiply = 0;
            while (i < formula.length && isDigit(formula[i])) {
                multiply = 10 * multiply + (formula[i].charCodeAt(0) - '0'.charCodeAt(0));
                i++;
            }

            multiply = multiply || 1;

            const top = stack.pop();
            for (const [atom, count] of Object.entries(top)) {
                stack[stack.length - 1][atom] = (stack[stack.length - 1][atom] || 0) + count * multiply;
            }
        }
        // Get atom with count of atom
        else if (isUpperCase(character)) {
            i++;

            let atom = character;
            while (i < formula.length && isLowerCase(formula[i])) {
                atom += formula[i];
                i++;
            }

            let multiply = 0;
            while (i < formula.length && isDigit(formula[i])) {
                multiply = 10 * multiply + (formula[i].charCodeAt(0) - '0'.charCodeAt(0));
                i++;
            }

            multiply = multiply || 1;

            const top = stack[stack.length - 1];
            top[atom] = (top[atom] || 0) + multiply;
        }
    }

    // console.log(stack);
    const result = Object.entries(stack[0]).sort((a, b) => a[0].localeCompare(b[0]));
    let atomCount = "";
    for (const [atom, count] of result) {
        atomCount += (count === 1) ? atom : atom + count;
    }

    // console.log(atomCount);
    return atomCount;
};