/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
// TC: O(n*m)
// SC: O(n)
// Solution: Hashtable
var checkValid = function(matrix) {
    const rows = new Map(), cols = new Map(), n = matrix.length;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (!rows.has(row)) rows.set(row, new Set());
            if (!cols.has(col)) cols.set(col, new Set());

            rows.get(row).add(matrix[row][col]);
            cols.get(col).add(matrix[row][col]);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (rows.get(i).size !== n || cols.get(i).size !== n) return false;
    }

    return true;
};