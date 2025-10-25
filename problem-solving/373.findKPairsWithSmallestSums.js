/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: MinHeap
var kSmallestPairs = function(nums1, nums2, k) {
    const minHeap = new MinPriorityQueue(item => item[0]);
    const result = [];

    for (let i = 0; i < nums2.length; i++) {
        minHeap.enqueue([nums1[0] + nums2[i], 0, i]);
    }

    while (k && !minHeap.isEmpty()) {
        const [sum, index1, index2] = minHeap.dequeue();

        result.push([nums1[index1], nums2[index2]]);
        k--;

        if (k === 0) return result;

        if (index1 < nums1.length - 1) {
            minHeap.enqueue([nums1[index1 + 1] + nums2[index2], index1 + 1, index2]);
        }
    }

    return result;
};