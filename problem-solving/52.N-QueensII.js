/**
 * @param {number} n
 * @return {number}
 */
// TC: O(n!)
// SC: O(n^2)
// Solution: Backtracking
var totalNQueens = function(n) {
    const board = new Array(n).fill(0).map(_ => new Array(n).fill('.'));
    let result = 0;

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
            result++;
            return;
        }

        for (let i = 0; i < n; i++) {
            if (isValid(row, i)) {
                board[row][i] = 'Q';
                backtrack(row + 1);
                board[row][i] = '.';
            }
        }
    }

    backtrack(0);

    return result;
};