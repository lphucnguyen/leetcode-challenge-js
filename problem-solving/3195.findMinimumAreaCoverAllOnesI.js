/**
 * @param {number[][]} grid
 * @return {number}
 */
// TC: O(n*m)
// SC: O(1)
// Solution: Matrix
var minimumArea = function(grid) {
    let minRow = minCol = Infinity, maxRow = maxCol = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                minRow = Math.min(minRow, row);
                maxRow = Math.max(maxRow, row);

                minCol = Math.min(minCol, col);
                maxCol = Math.max(maxCol, col);
            }
        }
    }

    const width = maxCol - minCol + 1, height = maxRow - minRow + 1;

    // console.log(width * height);
    return width * height;
};