/**
 * @param {number} n
 * @return {number}
 */
// TC: O(n^2)
// SC: O(n^2)
// Solution: Memorization
var soupServings = function(n) {
    const operations = [[100, 0], [75, 25], [50, 50], [25, 75]], map = new Map();

    if (n > 4800) return 1.0;

    const pouring = (ml1, ml2) => {
        if (ml1 <= 0 && ml2 > 0) return 1;
        else if (ml1 <= 0 && ml2 <= 0) return 0.5;
        else if (ml1 > 0 && ml2 <= 0) return 0;

        const key = `${ml1}-${ml2}`;

        if (map.has(key)) return map.get(key);

        let prob = 0;
        for (const [serving1, serving2] of operations) {
            prob += 0.25 * pouring(ml1 - serving1, ml2 - serving2);
        }

        map.set(key, prob);

        return prob;
    }

    return pouring(n, n);
};