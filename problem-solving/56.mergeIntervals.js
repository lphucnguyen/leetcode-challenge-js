// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


// Solution: Using sort and compare
// - Compare the end of the previous interval with the start of the current interval
// - If the end of the previous interval is greater than or equal to the start of the current interval, merge them
// O(n) in time

var merge = function(intervals) {
    const results = [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    let intervalMerged = intervals[0];

    for (let i = 0; i < intervals.length; i++) {
        const [startIntervalMerged, endIntervalMerged] = intervalMerged;
        const [start, end] = intervals[i];

        const lower = Math.min(startIntervalMerged, start);
        const higher = Math.max(endIntervalMerged, end);

        if (endIntervalMerged >= start) {
            intervalMerged = [lower, higher];
        } else {
            results.push(intervalMerged);
            intervalMerged = intervals[i];
        }
    }

    results.push(intervalMerged);

    return results;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,3],[2,6],[6,10],[15,18], [16,20]]));
console.log(merge([[1,4],[4,5]]));