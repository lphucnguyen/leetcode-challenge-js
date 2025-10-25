/**
 * @param {number} n
 * @return {boolean}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: Sorting
var reorderedPowerOf2 = function(n) {
    // We reorder the digits in any order (including the original order) such that the leading digit is not zero.
    // The resulting number is a power of two.
    // Sorting the sorting digit of n, if there is any the sorting digits string of the power of two equal to the return true
    const num = n.toString().split('').sort().join('');
    let pattern = '', powerTwo = 1;

    while (pattern.length <= num.length) {
        pattern = powerTwo.toString().split('').sort().join('');

        if (pattern === num) {
            return true;
        }

        powerTwo += powerTwo;
    }

    return false;
};