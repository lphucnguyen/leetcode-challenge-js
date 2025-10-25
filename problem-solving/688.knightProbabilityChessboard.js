/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
// TC: O(n^n)
// SC: O(n)
// Solution: Memorization
var knightProbability = function(n, k, startRow, startCol) {
    const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]], memo = new Map();

    const isBound = (row, col) => row < 0 || row >= n || col < 0 || col >= n;

    const calculateProb = (row, col, move) => {
        if (isBound(row, col)) return 0;
        else if (move === 0) return 1;

        const key = `${row}-${col}-${move}`;
        if (memo.has(key)) return memo.get(key);

        let prob = 0;
        for (const [dRow, dCol] of dirs) {
            prob += 0.125 * calculateProb(row + dRow, col + dCol, move - 1);
        }

        memo.set(key, prob);
        return prob;
    }

    return calculateProb(startRow, startCol, k);
};