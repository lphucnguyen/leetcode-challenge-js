/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: Greedy
var getSmallestString = function(n, k) {
    const res = new Array(n).fill('a');
    k -= n;

    while (k > 0) {
        // There is 25 character from a to z
        const add = Math.min(25, k);

        res[n - 1] = String.fromCharCode('a'.charCodeAt(0) + add);
        k -= add;
        n--;
    }

    // console.log(res);
    return res.join('');
};