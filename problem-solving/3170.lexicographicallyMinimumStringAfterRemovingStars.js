/**
 * @param {string} s
 * @return {string}
 */
// TC: O(NlogN) -> logN because use PriorityQueue
// SC: O(n)
// Solution: PriorityQueue + Greedy
var clearStars = function(s) {
    const subString = [...s];
    const minHeap = new PriorityQueue(
        (a, b) => {
            if (!b) return;

            if (a[0] === b[0]) {
                return b[1] - a[1];
            }

            return a[0].charCodeAt(0) - b[0].charCodeAt(0);
        }
    );

    for (let i = 0; i < s.length; i++) {
        const c = subString[i];

        if (c === '*') {
            const [c, index] = minHeap.dequeue();
            subString[index] = '';
        } else {
            minHeap.enqueue([c, i]);
        }
    }

    return subString.filter(c => c !== '*' && c !== '').join('');
};