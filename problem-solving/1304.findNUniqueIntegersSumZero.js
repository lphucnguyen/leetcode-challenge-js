/**
 * @param {number} n
 * @return {number[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Array
var sumZero = function(n) {
    const arr = new Array(n).fill(0);
    let k = 1;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        arr[i] = k;
        arr[n - 1 - i] = -k;
        k++;
    }

    // console.log(arr);
    return arr;
};