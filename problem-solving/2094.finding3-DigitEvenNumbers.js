/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Solution: Hashtable + Sorting
// TC: O(n^3)
// SC: O(n)
var findEvenNumbers = function(digits) {
    const result = new Set();

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            if (j === i) continue;
            for (let k = 0; k < digits.length; k++) {
                if (k === i || k === j) continue;

                const a = digits[i];
                const b = digits[j];
                const c = digits[k];

                // Skip numbers with leading zero
                if (a === 0) continue;

                const num = a * 100 + b * 10 + c;

                // Only include even numbers
                if (num % 2 === 0) {
                    result.add(num);
                }
            }
        }
    }

    return Array.from(result).sort((x, y) => x - y);
};