/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: HashMap + Sorting
var isPossibleDivide = function(nums, k) {
    nums.sort((a, b) => a - b);
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of nums) {
        while (map.get(num) > 0) {
            for (let i = 0; i < k; i++) {
                if (!map.has(num + i) || map.get(num + i) === 0) return false;
                map.set(num + i, map.get(num + i) - 1);
            }
        }
    }

    return true;
};