/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
// TC: O(n)
// SC: O(n)
// Solution: DFS or BFS
var updateBoard = function(board, click) {
    const rows = board.length, cols = board[0].length;
    const [r, c] = click;
    const dirs = [
        [-1, -1], [1, 1], [0, 1], [1, 0], [-1, 1], [1, -1], [-1, 0], [0, -1]
    ];

    const countMines = (row, col) => {
        let numMine = 0;

        for (const [dRow, dCol] of dirs) {
            const newRow = row + dRow, newCol = col + dCol;

            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                continue;
            }

            if (board[newRow][newCol] === 'M') {
                numMine++;
            }
        }

        return numMine;
    }

    if (board[r][c] === 'M') {
        board[r][c] = 'X';
        return board;
    }

    // BFS
    // const queue = [[r, c]];

    // while (queue.length) {
    //     const [row, col] = queue.shift();

    //     if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== 'E') {
    //         continue;
    //     }

    //     const numMines = countMines(row, col);

    //     if (numMines > 0) {
    //         board[row][col] = numMines.toString();
    //         continue;
    //     }

    //     board[row][col] = 'B';
    //     for (const [dRow, dCol] of dirs) {
    //         queue.push([row + dRow, col + dCol]);
    //     }
    // }

    // // console.log(board);
    // return board;

    // DFS
    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== 'E') {
            return;
        }

        const numMines = countMines(row, col);

        if (numMines > 0) {
            board[row][col] = numMines.toString();
            return;
        }

        board[row][col] = 'B';
        for (const [dRow, dCol] of dirs) {
            dfs(row + dRow, col + dCol);
        }
    }

    dfs(r, c);
    return board;
};