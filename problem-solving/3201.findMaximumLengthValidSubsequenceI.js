/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: DP
var maximumLength = function(nums) {
    let countOdd = 0, countEven = 0, alterOdd = 0, alterEven = 0;

    for (const num of nums) {
        if (num % 2 === 0) {
            countEven++;
            // [1,2,3] when add 4 -> [1,2,3,4] -> 4 is even (alterEven) will need alterOdd + 1
            alterEven = alterOdd + 1;
        } else {
            countOdd++;
            // [1,2,4] when add 7 -> [1,2,4,7] -> 7 is odd (alterOdd) will need alterEven + 1
            alterOdd = alterEven + 1;
        }
    }

    return Math.max(countOdd, countEven, alterOdd, alterEven);
};