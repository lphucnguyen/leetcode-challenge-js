/**
 * @param {number} finalSum
 * @return {number[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Greedy
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 !== 0) return [];

    let sum = 0, current = 2, results = [];

    while (sum + current <= finalSum) {
        results.push(current);

        sum += current;
        current += 2;
    }

    if (sum < finalSum) {
        results[results.length - 1] += (finalSum - sum);
    }

    return results;
};