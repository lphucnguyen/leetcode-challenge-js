/**
 * @param {number[]} fruits
 * @return {number}
 */
// TC: O(n)
// SC: O(n), using map
// Solution: Hashtable + Sliding Window
var totalFruit = function(fruits) {
    const map = new Map();
    const MAX_BACKET = 2;
    let windowStart = 0;
    let total = 0;

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        map.set(fruits[windowEnd], (map.get(fruits[windowEnd]) || 0) + 1);

        while (map.size > MAX_BACKET) {
            map.set(fruits[windowStart], map.get(fruits[windowStart]) - 1);

            if (map.get(fruits[windowStart]) === 0) {
                map.delete(fruits[windowStart]);
            }

            windowStart++;
        }

        total = Math.max(total, windowEnd - windowStart + 1);
    }

    return total;
};