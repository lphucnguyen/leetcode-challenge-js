/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const memo = new Map(), rows = m, cols = n, MOD = 10**9 + 7;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const isBound = (row, col) => row >= rows || row < 0 || col >= cols || col < 0;

    const dfs = (row, col, moves) => {
        if (isBound(row, col) && moves >= 0) return 1;
        if (moves === 0) return 0;

        const key = `${row}-${col}-${moves}`;
        if (memo.has(key)) return memo.get(key);

        let result = 0;
        for (const [dRow, dCol] of dirs) {
            result = (result + dfs(row + dRow, col + dCol, moves - 1)) % MOD;
        }
        
        memo.set(key, result);

        return result;
    }

    // console.log(dfs(startRow, startColumn, maxMove));
    return dfs(startRow, startColumn, maxMove);
};