// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Solution: DFS
// - create a variable numberOfIsland
// - create a dfs function (grid, x, y)
//   - if x or y is out of bounds or grid[x][y] is 0, return
//   - set grid[x][y] to 0
//   - call dfs(grid, x + 1, y)
//   - call dfs(grid, x - 1, y)
//   - call dfs(grid, x, y + 1)
//   - call dfs(grid, x, y - 1)
// - loop through grid
//   - loop through grid[i]
//     - if grid[i][j] is 1
//       - increment numberOfIsland
//       - call dfs(grid, i, j)
// - return numberOfIsland
// Time Complexity: O(n * m) -> n is the number of rows, m is the number of columns
// Space Complexity: O(1)

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numberOfIsland = 0;

    const dfs = (grid, x, y) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length || grid[x][y] === '0') return;
        grid[x][y] = '0';

        dfs(grid, x + 1, y);
        dfs(grid, x - 1, y);
        dfs(grid, x, y + 1);
        dfs(grid, x, y - 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numberOfIsland++;
                dfs(grid, i, j);
            }
        }
    }

    return numberOfIsland;
};

