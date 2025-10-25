/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let max = num, digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        const temp = digits[i];
        digits[i] = (digits[i] === '9') ? '6' : '9';

        max = Math.max(max, parseInt(digits.join('')));
        digits[i] = temp;
    }

    return max;
};