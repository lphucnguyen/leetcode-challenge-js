/**
 * @param {number[][]} grid
 * @return {number}
 */
// TC: O(n*m)
// SC: O(n)
// Solution: DFS
var numEnclaves = function(grid) {
    const rows = grid.length, cols = grid[0].length, dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
            return;
        }

        grid[row][col] = 0;

        for (const [dRow, dCol] of dirs) {
            const nextRow = row + dRow, nextCol = col + dCol;

            dfs(nextRow, nextCol);
        }
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, 0);
        dfs(row, cols - 1);
    }

    for (let col = 0; col < cols; col++) {
        dfs(0, col);
        dfs(rows - 1, col);
    }

    let count = 0;
    for (let row = 1; row < rows - 1; row++) {
        for (let col = 1; col < cols - 1; col++) {
            if (grid[row][col] === 1) count++;
        }
    }

    return count;
};