// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.


// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Solution: Iterative
// - Create an empty array results to store the results
// - Create variables startNewInterval and endNewInterval to store the start and end of the new interval
// - Loop through the intervals array
// - If new interval is before the current element without overlapping
// - If new interval is after the current element without overlapping
// - If the current interval is over newInterval, we keep on updating the newInterval until we find no overlap
// - Push the new interval to the results array
// - Return the results array
// Time complexity: O(n)
// Space complexity: O(n)


var insert = function(intervals, newInterval) {
    const results = [];
    let [startNewInterval, endNewInterval] = newInterval;

    for(let i=0;i<intervals.length;i++){

		//If new interval is before the current element without overlapping
		if(endNewInterval < intervals[i][0]){
			results.push([startNewInterval, endNewInterval])
			return results.concat(intervals.slice(i))
		}

		//If new interval is after the current element without overlapping
		else if(startNewInterval > intervals[i][1]){
			results.push(intervals[i])
		}

		//If the current interval is over newInterval,we keep on updating the newInterval
		//until we find no overlap
		else{
            startNewInterval = Math.min(startNewInterval, intervals[i][0])
            endNewInterval = Math.max(endNewInterval, intervals[i][1])
		}

	}

    results.push(newInterval);
    return results;
};

console.log(insert([[1,3],[6,9]], [2,5])); // [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // [[1,2],[3,10],[12,16]]
console.log(insert([], [5,7])); // [[5,7]]
console.log(insert([[1,5]], [2,3])); // [[1,5]]