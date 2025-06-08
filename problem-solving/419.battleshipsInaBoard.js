/**
 * @param {character[][]} board
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: DFS
var countBattleships = function(board) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (row, col) => {
        if (row >= rows || row < 0 || col >= cols || col < 0 || board[row][col] === '.') return;
        board[row][col] = '.';

        dfs(row + 1, col);
        dfs(row, col + 1);
    }

    let count = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === '.') continue;

            dfs(row, col);
            count++;
        }
    }

    return count;
};