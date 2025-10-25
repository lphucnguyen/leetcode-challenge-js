/**
 * @param {number[][]} matrix
 * @return {number}
 */
// TC: O(n*m)
// SC: O(n*m)
// Solution: Memorization
var minFallingPathSum = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length, memo = new Map();
    const dirs = [[1, -1], [1, 0], [1, 1]];

    const memorize = (row, col) => {
        if (row < 0 || row >= rows || col >= cols || col < 0) {
            return Infinity;
        }

        if (row === rows - 1) {
            return matrix[row][col];
        }

        const key = `${row}-${col}`;
        if (memo.has(key)) return memo.get(key);

        let min = Infinity;
        for (const [dRow, dCol] of dirs) {
            const nextRow = row + dRow, nextCol = col + dCol;

            min = Math.min(min, matrix[row][col] + memorize(nextRow, nextCol));
        }

        memo.set(key, min);
        return min;
    }

    let min = Infinity;
    for (let col = 0; col < cols; col++) {
        min = Math.min(min, memorize(0, col));
    }

    return min;
};