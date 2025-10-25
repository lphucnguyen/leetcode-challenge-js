/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var buildArray = function(target, n) {
    let targetIndex = 0, operations = [];

    for (let num = 1; num <= n; num++) {
        if (target[targetIndex] === num) {
            operations.push('Push');
            targetIndex++;
        } else {
            operations.push('Push');
            operations.push('Pop');
        }

        if (targetIndex === target.length) {
            break;
        }
    }

    return operations;
};