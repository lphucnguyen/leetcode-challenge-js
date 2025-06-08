/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: Binary Search
// https://leetcode.com/problems/russian-doll-envelopes/solutions/4157511/optimized-russian-doll-envelopes-lis-with-custom-sorting
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => {
        // If the width is the same, sort desc the height => if the lower height is first, the result is not correct
        // Ex: [6, 4], [6,7], [6,3], if sort asc [6,3], [6,4], [6,7] -> add 3 items to the result list with height [3, 4, 7]
        // if sort desc [6,7], [6,4], [6,3] -> add 1 items to the result list with height [7]
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }

        return a[0] - b[0];
    });

    // console.log(envelopes);

    // The results to store the height of evenlopes follow ascending -> using Binary Search index to insert
    const results = [];
    const findPlaceToInsert = (height) => {
        let left = 0, right = results.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (results[mid] < height) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    for (const [width, height] of envelopes) {
        const index = findPlaceToInsert(height);

        if (index < results.length) {
            results[index] = height;
        } else {
            results.push(height);
        }

        // console.log(index);
        // console.log(results);
    }

    return results.length;
};