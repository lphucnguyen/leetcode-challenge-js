/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: BFS
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    // keySet is stored the collected keys
    // boxAvailable is stored the collected boxes
    // If we unwrap a box, you will get 2 types: box, key
    // Store key to keySet
    // Store box to boxAvailable in case of there is no this box in boxAvailable and it is not processed
    // **Note: in case we unwrap a box, we get boxes and keys, but there is no key for these boxes, we can store the box to boxAvailable to unwrap when we get a key later
    // Push to queue to process (unwrap) the next box
    const keySet = new Set(), boxAvailable = new Set(), queue = [];
    // Store the box that unwraped
    const visited = new Set();
    let numberCandy = 0;

    for (const box of initialBoxes) {
        boxAvailable.add(box);

        if (status[box]) {
            queue.push(box);
            visited.add(box);
        }
    }

    while (queue.length) {
        const box = queue.shift();
        numberCandy += candies[box];

        for (const key of keys[box]) {
            if (keySet.has(key)) continue;

            keySet.add(key);
            if (boxAvailable.has(key) && !visited.has(key)) {
                queue.push(key);
                visited.add(key);
            }
        }

        for (const containBox of containedBoxes[box]) {
            boxAvailable.add(containBox);

            if ((keySet.has(containBox) && !visited.has(containBox)) || status[containBox] === 1) {
                queue.push(containBox);
                visited.add(containBox);
            }
        }
    }

    // console.log(numberCandy);
    // console.log(keySet);
    return numberCandy;
};

console.log(
    maxCandies(
        [1, 0, 1, 0],
        [7, 5, 4, 100],
        [[], [], [1], []],
        [[1, 2], [3], [], []],
        [0]
    )
); // Output: 16

console.log(
    maxCandies(
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [[1, 2, 3, 4, 5], [], [], [], [], []],
        [[1, 2, 3, 4, 5], [], [], [], [], []],
        [0]
    )
); // Output: 6