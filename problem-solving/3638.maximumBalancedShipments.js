/**
 * @param {number[]} weight
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: DP
var maxBalancedShipments = function(weights) {
    let max = 0, count = 0;

    for (const weight of weights) {
        max = Math.max(max, weight);

        // Find the maximum number of balanced shipments
        // So whenever weight < max => count++
        if (weight < max) {
            count++;
            max = 0;
        }
    }

    return count;
};