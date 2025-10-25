/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Sliding Window
var numOfSubarrays = function(arr, k, threshold) {
    let left = 0, total = 0, numSub = 0;

    for (let right = 0; right < arr.length; right++) {
        total += arr[right];

        while (right - left + 1 > k) {
            total -= arr[left];
            left++;
        }

        if (total / k >= threshold && right - left + 1 === k) {
            numSub++;
        }
    }

    return numSub;
};