/**
 * @param {number[][]} matrix
 * @return {number}
 */
// TC: O(n * m)
// SC: O(n * m)
// Solution: Memorization, DP
var countSquares = function(matrix) {
    // const memo = new Map(), dirs = [[1, 0], [0, 1], [1, 1]], rows = matrix.length, cols = matrix[0].length;

    // const countSquare = (row, col) => {
    //     if (row < 0 || row >= rows || col < 0 || col >= cols || matrix[row][col] === 0) {
    //         return 0;
    //     }

    //     const key = `${row}-${col}`;
    //     if (memo.has(key)) {
    //         return memo.get(key);
    //     }

    //     let count = Infinity;
    //     for (const [dRow, dCol] of dirs) {
    //         count = Math.min(count, countSquare(row + dRow, col + dCol) + 1);
    //     }

    //     memo.set(key, count);
    //     return count;
    // }

    // let numSquare = 0;
    // for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < cols; col++) {
    //         if (matrix[row][col] === 0) continue;

    //         numSquare += countSquare(row, col);
    //     }
    // }

    // return numSquare;

    // DP
    const rows = matrix.length, cols = matrix[0].length;
    let count = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === 1 && row > 0 && col > 0) {
                matrix[row][col] = Math.min(matrix[row - 1][col - 1], matrix[row - 1][col], matrix[row][col - 1]) + 1;
            }

            count += matrix[row][col];
        }
    }

    return count;
};