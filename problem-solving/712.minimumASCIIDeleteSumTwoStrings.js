/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// TC: O(n*m)
// SC: O(n*m)
// Solution: Memorization
var minimumDeleteSum = function(s1, s2) {
    const memo = new Map();

    const getMinimum = (index1, index2) => {
        if (index1 === s1.length && index2 === s2.length) return 0;

        const key = `${index1}-${index2}`;
        if (index1 === s1.length && index2 < s2.length) {
            return getMinimum(index1, index2 + 1) + s2.charCodeAt(index2);
        }
        else if (index1 < s1.length && index2 === s2.length) {
            return getMinimum(index1 + 1, index2) + s1.charCodeAt(index1);
        }
        else if (index1 === s1.length || index2 === s2.length) {
            return 0;
        }
        else if (memo.has(key)) {
            return memo.get(key);
        }

        if (s1[index1] === s2[index2]) {
            memo.set(key, getMinimum(index1 + 1, index2 + 1));

            return memo.get(key);
        }

        const cost1 = getMinimum(index1 + 1, index2) + s1.charCodeAt(index1);
        const cost2 = getMinimum(index1, index2 + 1) + s2.charCodeAt(index2);

        memo.set(key, Math.min(cost1, cost2));
        return memo.get(key);
    }

    return getMinimum(0, 0);
};