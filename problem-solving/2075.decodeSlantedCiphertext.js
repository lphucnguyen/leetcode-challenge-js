/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
// TC: O(n), n is cols
// SC: O(n)
// Solution: String + Simulation
var decodeCiphertext = function(encodedText, rows) {
    const cols = encodedText.length / rows;
    let str = '';

    // Traverse starting positions for diagonals (row=0, col=0..cols-1)
    for (let startCol = 0; startCol < cols; startCol++) {
        let row = 0, col = startCol;
        
        while (row < rows && col < cols) {
            str += encodedText[row * cols + col];

            row++;
            col++;
        }
    }

    // console.log(str);
    return str.trimEnd();
};