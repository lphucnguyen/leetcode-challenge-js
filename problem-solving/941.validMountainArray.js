/**
 * @param {number[]} arr
 * @return {boolean}
 */
// TC: O(n)
// SC: O(1)
// Solution: Brute Force
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;

    let left = 0, right = arr.length - 1;

    while (arr[left] < arr[left + 1]) {
        left++;
    }

    while (arr[right] < arr[right - 1]) {
        right--;
    }

    return left === right && left !== 0 && right !== arr.length - 1;
};