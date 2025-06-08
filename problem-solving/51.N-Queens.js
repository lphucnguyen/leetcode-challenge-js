/**
 * @param {number} n
 * @return {string[][]}
 */
// TC: O(n!)
// SC: O(n^2)
// Solution: Backtracking
var solveNQueens = function(n) {
    const board = new Array(n).fill(0).map(_ => new Array(n).fill('.'));
    const results = [];

    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    const backtrack = (row) => {
        if (row === n) {
            results.push([...board].map(item => item.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return results;
};