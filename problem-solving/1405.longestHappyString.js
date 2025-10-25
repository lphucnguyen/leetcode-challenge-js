/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: MinHeap
var longestDiverseString = function(a, b, c) {
    const heap = [];

    if (a > 0) heap.push(['a', a]);
    if (b > 0) heap.push(['b', b]);
    if (c > 0) heap.push(['c', c]);
    heap.sort((a, b) => b[1] - a[1]);

    let diverseString = '';

    while (heap.length) {
        let [char, count] = heap.shift();

        // s does not contain any of "aaa", "bbb", or "ccc" as a substring -> Check diverseString.slice(-2) === char.repeat(2)
        if (diverseString.length >= 2 && diverseString.slice(-2) === char.repeat(2)) {
            if (heap.length === 0) break;

            let [char2, count2] = heap.shift();

            diverseString += char2;
            if (--count2 > 0) heap.push([char2, count2]);

            heap.push([char, count]);
        } else {
            diverseString += char;
            if (--count > 0) heap.push([char, count]);
        }

        heap.sort((a, b) => b[1] - a[1]);
    }

    // console.log(diverseString);
    return diverseString
};