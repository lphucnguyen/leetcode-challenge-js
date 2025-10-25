/**
 * @param {string} s
 * @return {string[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Hashtable
function partitionString(s) {
    const seen = new Set(), results = [];
    let current = '';

    for (const c of s) {
        current += c;

        if (!seen.has(current)) {
            results.push(current);
            seen.add(current);
            current = '';
        }
    }

    return results;
}
