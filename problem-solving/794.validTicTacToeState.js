/**
 * @param {string[]} board
 * @return {boolean}
 */
// TC: O(1)
// SC: O(n)
// Solution: Array
var validTicTacToe = function(board) {
    const boardString = board.join('');

    // 0 1 2
    // 3 4 5
    // 6 7 8
    // Convert the board to the a string 012345678
    const isWin = (b, char) => {
        return (
            (b[0] === char && b[0] === b[3] && b[3] === b[6]) ||
            (b[1] === char && b[1] === b[4] && b[4] === b[7]) ||
            (b[2] === char && b[2] === b[5] && b[5] === b[8]) ||
            (b[0] === char && b[0] === b[1] && b[1] === b[2]) ||
            (b[3] === char && b[3] === b[4] && b[4] === b[5]) ||
            (b[6] === char && b[6] === b[7] && b[7] === b[8]) ||
            (b[0] === char && b[0] === b[4] && b[4] === b[8]) ||
            (b[2] === char && b[2] === b[4] && b[4] === b[6])
        )
    }

    let countX = 0, countO = 0;
    for (const c of boardString) {
        if (c === 'X') countX++;
        else if (c === 'O') countO++;
    }

    if (countO > countX || countX > countO + 1) {
        return false;
    }

    const isXWin = isWin(boardString, 'X'), isOWin = isWin(boardString, 'O');
    
    if (isXWin && isOWin) {
        return false;
    }
    // ["XXX","XOO","OO "]
    // Example:
    // XXX
    // XOO
    // OO 
    // It is not valid, because x is win first so countX !== countO + 1
    if (isXWin && countX !== countO + 1) {
        return false;
    }
    if (isOWin && countX !== countO) {
        return false
    }

    return true;
};