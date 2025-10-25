/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
// TC: O(n^2 logn)
// SC: O(n)
// Solution: Map + Sorting
var sortMatrix = function(grid) {
    const n = grid.length, diagonals = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const key = i - j;

            if (!diagonals.has(key)) {
                diagonals.set(key, []);
            }

            diagonals.get(key).push(grid[i][j]);
        }
    }

    for (const [key, values] of diagonals) {
        if (key < 0) {
            values.sort((a, b) => a - b);
        } else {
            values.sort((a, b) => b - a);
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const key = i - j;
            grid[i][j] = diagonals.get(key).shift();
        }
    }

    // console.log(grid);
    return grid;
};