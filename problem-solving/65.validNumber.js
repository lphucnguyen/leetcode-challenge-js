/**
 * @param {string} s
 * @return {boolean}
 */
// TC: O(n)
// SC: O(1)
// Solution: Iterate through the string and check if the character is a number, sign, exponent, or decimal.

var isNumber = function(s) {
    let isNumber = false, isSign = false, isExponent = false, isDecimal = false;

    for (const character of s) {
        if (character >= '0' && character <= '9') {
            isNumber = true;
        } else if (character === 'e' || character === 'E') {
            if (isExponent || !isNumber) return false;
            else {
                isExponent = true;
                isSign = false;
                isNumber = false;
                isDecimal = false;
            }
        } else if (character === '+' || character === '-') {
            if (isSign || isNumber || isDecimal) return false;
            else isSign = true;
        } else if (character === '.') {
            if (isDecimal || isExponent) return false;
            else isDecimal = true;
        } else return false;
    }

    return isNumber;
};