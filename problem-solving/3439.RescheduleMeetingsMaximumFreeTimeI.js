/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Sliding Window
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    const numEvent = startTime.length, gaps = [];

    for (let i = 0; i < numEvent; i++) {
        gaps.push(startTime[i] - ( endTime[i - 1] || 0));
    }

    gaps.push(eventTime - endTime[numEvent - 1]);

    if (gaps.length < k) {
        return gaps.reduce((a, b) => a + b, 0);
    }

    // Sliding window in the gaps array with window k + 1
    // Number of gap is equal the number k moves
    // If it is out of the window k + 1, remove it by currentSum -= gaps[i - (k + 1)]
    let max = 0, currentSum = 0;
    for (let i = 0; i < gaps.length; i++) {
        currentSum += gaps[i];

        if (i >= k + 1) {
            currentSum -= gaps[i - (k + 1)];
        }

        if (i >= k) {
            max = Math.max(max, currentSum);
        }
    }

    return max;
};