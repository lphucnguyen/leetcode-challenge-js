/**
 * @param {number[]} arr
 * @return {string}
 */
// TC: O(4!)
// SC: O(1)
// Solution: Backtracking
var largestTimeFromDigits = function(arr) {
    if (arr.every(a => a === 0)) return '00:00';

    const seen = new Set();
    let strTime = '';

    const backtrack = (time) => {
        if (time.length === arr.length) {
            if (Number(time) > Number(strTime)) {
                strTime = time;
            }
        }

        for (let index = 0; index < arr.length; index++) {
            if (seen.has(index)) continue;

            if (time.length === 1 && Number(time[0]) > 2) continue;

            if (time.length === 2 && Number(time[0]) === 2 && Number(time[1]) > 3) continue;

            if (time.length === 3 && Number(time[2]) > 5) continue;

            seen.add(index);

            backtrack(time + arr[index]);

            seen.delete(index);
        }
    }

    backtrack('');

    // console.log(strTime);
    return strTime ? strTime.slice(0, 2) + ":" + strTime.slice(2) : "";
};