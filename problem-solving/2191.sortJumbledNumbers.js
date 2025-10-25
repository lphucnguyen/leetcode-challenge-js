/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: Sorting
var sortJumbled = function(mapping, nums) {
    const map = (num) => {
        return num.toString().split('').map(digit => mapping[parseInt(digit)]).join('');
    }

    const pairs = nums.map((num, index) => {
        return [num, parseInt(map(num))];
    });

    pairs.sort((a, b) => {
        return a[1] - b[1];
    });

    return pairs.map(pair => pair[0]);
};