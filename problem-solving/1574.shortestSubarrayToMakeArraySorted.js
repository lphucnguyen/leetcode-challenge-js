/**
 * @param {number[]} arr
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Two Pointer
// https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/editorial
var findLengthOfShortestSubarray = function(arr) {
    let right = arr.length - 1, left = 0;

    while (right > 0 && arr[right] >= arr[right - 1]) {
        right--;
    }

    let result = right;
    while (left < right && (left === 0 || arr[left - 1] <= arr[left])) {
        while (right < arr.length && arr[left] > arr[right]) {
            right++;
        }

        result = Math.min(result, right - left - 1);
        left++;
    }

    // console.log(result);
    return result;
};