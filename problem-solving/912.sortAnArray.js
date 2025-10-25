/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: MinHeap
var sortArray = function(nums) {
    const minHeap = new MinPriorityQueue(), sorted = [];

    for (const num of nums) {
        minHeap.enqueue(num);
    }

    while (!minHeap.isEmpty()) {
        sorted.push(minHeap.dequeue());
    }

    // console.log(sorted);
    return sorted;
};