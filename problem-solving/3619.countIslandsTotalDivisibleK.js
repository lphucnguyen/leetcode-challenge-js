/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    const rows = grid.length, cols = grid[0].length;
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] <= 0) {
            return 0;
        }

        let sum = grid[row][col];
        grid[row][col] = 0;

        for (const [dRow, dCol] of dirs) {
            const nextRow = row + dRow, nextCol = col + dCol;

            sum += dfs(nextRow, nextCol);
        }

        return sum;
    }

    let ans = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] <= 0) continue;

            const sum = dfs(row, col);
            // console.log(sum);
            if (sum % k === 0) {
                ans++;
            }
        }
    }

    return ans;
};