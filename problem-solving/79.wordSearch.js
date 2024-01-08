// Given an m x n grid of characters board and a string word,
// return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.


// Example 1:

// Input: board = [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ], word = "ABCCED"
// Output: true

// Example 2:

// Input: board = [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ], word = "SEE"
// Output: true

// Example 3:

// Input: board = [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ], word = "ABCB"
// Output: false

// Solution 1: DFS
// - loop through board, if board[i][j] === word[0], run dfs
// - dfs:
//     - if word.length === countWord, return true
//     - if out of bounds or letter is not equal to word, return false
//     - mark as visited
//     - check if next letter is valid
//         - if so, return true
//     - backtrack
// - return false
// Time Complexity: O(n*m*4^s)
// Space Complexity: O(1)

var exist = function(board, word) {

    const dfs = (x, y, countWord) => {
        // Check if word is found
        if (word.length === countWord) return true;
        // Check if out of bounds or letter is not equal to word
        if (x >= board.length || x < 0 || y < 0 || y >= board[0].length || board[x][y] !== word[countWord]) return false;

        // Mark as visited
        board[x][y] = '#';

        // Check if next letter is valid
        const isNext = dfs(x, y + 1, countWord + 1) || dfs(x, y - 1, countWord + 1) || dfs(x + 1, y, countWord + 1) || dfs(x - 1, y, countWord + 1);
        if (isNext) {
            return true;
        }

        // Backtrack
        board[x][y] = word[countWord];
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) return true; 
        }
    }

    return false;
};