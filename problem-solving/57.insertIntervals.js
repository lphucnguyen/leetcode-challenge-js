/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Iterate through the intervals and check if the new interval is before, after, or overlapping with the current interval.
var insert = function(intervals, newInterval) {
    const result = [];

    for(let i=0;i<intervals.length;i++){

		//If new interval is before the current element without overlapping
		if(newInterval[1] < intervals[i][0]){
			result.push(newInterval)
			return result.concat(intervals.slice(i))
		}

		//If new interval is after the current element without overlapping
		else if(newInterval[0] > intervals[i][1]){
			result.push(intervals[i])
		}

		//If the current interval is over newInterval,we keep on updating the newInterval
		//until we find no overlap
		else{
			newInterval=[
                Math.min(newInterval[0],intervals[i][0]),
                Math.max(newInterval[1],intervals[i][1])
            ]
		}

	}

    result.push(newInterval);
    return result;
};