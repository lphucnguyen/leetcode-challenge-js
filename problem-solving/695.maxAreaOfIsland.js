/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    const dirs = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
            return 0;
        }

        grid[row][col] = 0;

        let area = 1;
        for (const [dRow, dCol] of dirs) {
            area += dfs(row + dRow, col + dCol);
        }

        return area;
    }

    let maxArea = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 0) continue;

            maxArea = Math.max(maxArea, dfs(row, col));
        }
    }

    return maxArea;
};