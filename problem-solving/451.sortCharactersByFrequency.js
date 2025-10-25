/**
 * @param {string} s
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: HashMap + MaxPriorityQueue (Heap)
var frequencySort = function(s) {
    const maxHeap = new MaxPriorityQueue(item => item[1]);
    const map = {};
    let freqStr = '';

    for (const c of s) {
        map[c] = (map[c] || 0) + 1;
    }

    for (const [character, count] of Object.entries(map)) {
        maxHeap.enqueue([character, count]);
    }

    while (maxHeap.size() > 0) {
        const [character, count] = maxHeap.dequeue();

        freqStr += character.repeat(count);
    }

    return freqStr;
};