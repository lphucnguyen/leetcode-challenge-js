/**
 * @param {string} s
 * @return {number[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Two Pointer
// The key:
// Find the last occurrence of each character
// For each position in the string, determine the furthest position we need to extend our current partition to include all required characters
var partitionLabels = function(s) {
    const lastIndex = {};
    const results = [];
    let end = 0, start = 0;

    // Create a map to store the last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    // For each position, update the end boundary of the current partition based on the last occurrence of the current character
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]);

        // If we've reached the end boundary of our current partition, it means we've included all necessary characters for this partition, so we add its length to our result
        if (end === i) {
            results.push(end - start + 1);
            start = i + 1;
        }
    }

    // console.log(results);
    return results;
};