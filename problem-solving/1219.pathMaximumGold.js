/**
 * @param {number[][]} grid
 * @return {number}
 */
// TC: O(4^(n*m))
// SC: O(n*m)
// Solution: Backtracking
var getMaximumGold = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    let max = 0;

    const backtrack = (row, col, total) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
            return;
        }

        const temp = grid[row][col];
        grid[row][col] = 0;

        max = Math.max(max, total + temp);

        for (const [dRow, dCol] of dirs) {
            const nextRow = row + dRow, nextCol = col + dCol;

            backtrack(nextRow, nextCol, total + temp);
        }

        grid[row][col] = temp;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 0) continue;

            backtrack(row, col, 0);
        }
    }

    // console.log(max);
    return max;
};