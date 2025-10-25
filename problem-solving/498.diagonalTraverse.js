/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// TC: O(n + m)
// SC: O(n)
// Solution: Matrix
var findDiagonalOrder = function(mat) {
    const rows = mat.length, cols = mat[0].length;
    const map = new Map();

    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (!map.has(row + col)) map.set(row + col, []);

            map.get(row + col).push(mat[row][col]);
        }
    }

    const results = [];
    // Traverse the up side and the right side [1, 0], [2, 0] -> [rows, 0] and [0, 1], [0, 2] -> [0, cols]
    for (let i = 0; i < rows + cols - 1; i++) {
        const list = map.get(i);

        if (i % 2 === 0) list.reverse();

        results.push(...list);
    }

    return results;
};