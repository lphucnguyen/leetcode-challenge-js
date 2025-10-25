/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: MinHeap Priority
var rearrangeBarcodes = function(barcodes) {
    const maxHeap = new PriorityQueue((a, b) => {
        if (!b) return;

        return b[0] - a[0];
    }), sortedBarcode = [], hash = {};

    for (const barcode of barcodes) {
        hash[barcode] = (hash[barcode] || 0) + 1;
    }

    for (const barcode in hash) {
        maxHeap.enqueue([hash[barcode], parseInt(barcode)]);
    }

    while (!maxHeap.isEmpty() && maxHeap.size() >= 2) {
        let [countFirst, first] = maxHeap.dequeue(), [countSecond, second] = maxHeap.dequeue();

        sortedBarcode.push(first, second);

        if (--countFirst > 0) {
            maxHeap.enqueue([countFirst, first]);
        }

        if (--countSecond > 0) {
            maxHeap.enqueue([countSecond, second]);
        }
    }

    if (!maxHeap.isEmpty()) {
        let [countRest, rest] = maxHeap.dequeue();

        sortedBarcode.push(rest);
    }

    // console.log(sortedBarcode);
    return sortedBarcode;
};