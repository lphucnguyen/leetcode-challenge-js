/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// TC: O(32)
// SC: O(1)
// Solution: Bit masking
var getSum = function(a, b) {
    while (b !== 0) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }

    return a;
};