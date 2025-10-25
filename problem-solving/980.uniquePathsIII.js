/**
 * @param {number[][]} grid
 * @return {number}
 */
// TC: O(4^n)
// SC: O(1)
// Solution: Backtracking
var uniquePathsIII = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    let startRow = 0, startCol = 0, endRow = 0, endCol = 0, countBlank = 0, uniquePath = 0;

    const backtrack = (row, col, remaining) => {
        if (row >= rows || row < 0 || col >= cols || col < 0 || grid[row][col] === -1) {
            return;
        }

        if (row === endRow && col === endCol) {
            if (remaining === 0) {
                uniquePath++;
            }

            return;
        }

        remaining--;
        const temp = grid[row][col];
        grid[row][col] = -1;

        backtrack(row + 1, col, remaining);
        backtrack(row - 1, col, remaining);
        backtrack(row, col + 1, remaining);
        backtrack(row, col - 1, remaining);

        grid[row][col] = temp;
        remaining++;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                startRow = row;
                startCol = col;
            } else if (grid[row][col] === 2) {
                endRow = row;
                endCol = col;
            } else if (grid[row][col] === 0) {
                countBlank++;
            }
        }
    }

    backtrack(startRow, startCol, countBlank + 1);

    // console.log(uniquePath);
    return uniquePath;
};