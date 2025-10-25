/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // Sort the words with the same frequency by their lexicographical order.
    // words.sort();

    // const map = {};
    // const results = [];

    // for (const word of words) {
    //     map[word] = (map[word] || 0) + 1;
    // }

    // const sortedMap = Object.entries(map).sort((a, b) => b[1] - a[1]);

    // while (k--) {
    //     results.push(sortedMap.shift()[0]);
    // }

    // return results;

    // Using MaxHeap
    const maxHeap = new PriorityQueue((a, b) => {
        if (!b) return;

        if (a[1] === b[1]) {
            return a[0] > b[0] ? 1 : -1;
        }

        return b[1] - a[1];
    });
    const map = {}, results = [];

    words.forEach(word => map[word] = (map[word] || 0) + 1);

    for (const word of Object.keys(map)) {
        maxHeap.enqueue([word, map[word]]);
    }

    while (k--) {
        results.push(maxHeap.dequeue()[0]);
    }

    return results;
};