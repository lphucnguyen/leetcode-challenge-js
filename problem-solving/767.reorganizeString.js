/**
 * @param {string} s
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: PriorityQueue
var reorganizeString = function(s) {
    const map = {};
    const maxHeap = [];

    for (const char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (const [char, count] of Object.entries(map)) {
        maxHeap.push([char, count]);
    }

    maxHeap.sort((a, b) => b[1] - a[1]);

    let result = '';
    while (maxHeap.length >= 2) {
        let [char1, count1] = maxHeap.shift();
        let [char2, count2] = maxHeap.shift();

        result += char1;
        result += char2;

        if (--count1) maxHeap.push([char1, count1]);
        if (--count2) maxHeap.push([char2, count2]);

        maxHeap.sort((a, b) => b[1] - a[1]);
    }

    while (maxHeap.length) {
        const [char, count] = maxHeap.shift();

        if (count > 1) return "";
        result += char;
    }

    // console.log(result);
    return result;
};