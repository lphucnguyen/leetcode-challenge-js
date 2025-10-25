/**
 * @param {number[]} heights
 * @return {number}
 */
// TC: O(n^2)
// SC: O(1)
// Soltuion: Brute Force
var maximumSumOfHeights = function(heights) {
    let maxSum = 0, n = heights.length;

    for (let i = 0; i < n; i++) {
        let currentHeight = heights[i], sum = currentHeight;

        for (let j = i - 1; j >= 0; j--) {
            currentHeight = Math.min(currentHeight, heights[j]);
            sum += currentHeight;
        }

        currentHeight = heights[i];

        for (let j = i + 1; j < n; j++) {
            currentHeight = Math.min(currentHeight, heights[j]);
            sum += currentHeight;
        }

        maxSum = Math.max(maxSum, sum);
    }

    // console.log(maxSum);
    return maxSum;
};