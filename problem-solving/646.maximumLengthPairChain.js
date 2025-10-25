/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    let longest = 1, current = pairs[0][1];

    for (let i = 1; i < pairs.length; i++) {
        const [c, d] = pairs[i];

        if (current < c) {
            longest++;
            current = d;
        }
    }

    return longest;
};