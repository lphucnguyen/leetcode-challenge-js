/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// TC: O(n)
// SC: O(1)
// Solution: Two Pointer
var findClosestElements = function(arr, k, x) {
    let left = 0, right = arr.length - 1;

    while (right - left >= k) {
        // a-x <= b-x (Comparison Law at the Question)
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) right--;
        else left++;
    }

    return arr.slice(left, right + 1);
};