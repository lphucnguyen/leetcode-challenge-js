/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

// Time complexity: O(n)
// Space complexity: O(n x m), where n is the number of words and m is the average length of the words
// Solution: Iterate through the words and add them to the current line until the line is full. Then, add the line to the result array.

var fullJustify = function(words, maxWidth) {
    const result = [];
    let currentWords = [];
    let numberLetterOneLine = 0;

    for (const word of words) {
        const numberSpace = currentWords.length;

        if (word.length + numberSpace + numberLetterOneLine > maxWidth) {
            // Add space each word in currentWords
            for (let i = 0; i < maxWidth - numberLetterOneLine; i++) {
                // (currentWords.length - 1 || 1) because number / 0 is wrong, so if currentWords.length - 1 === 0 => 1
                const position = i % (currentWords.length - 1 || 1);
                currentWords[position] += ' ';
            }

            // Add to result array and reset
            result.push(currentWords.join(''));
            currentWords = [];
            numberLetterOneLine = 0;
        }

        // Current word in one line
        currentWords.push(word);
        numberLetterOneLine += word.length;
    }

    let lastLine = currentWords.join(' ');
    while (lastLine.length < maxWidth) lastLine += ' ';
    result.push(lastLine);

    return result;
};