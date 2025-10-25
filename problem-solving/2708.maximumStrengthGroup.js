/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function(nums) {
    // TC: O(2^n)
    // SC: O(n)
    // Solution: Memorization
    
    // const memo = new Map();

    // const getMax = (index) => {
    //     if (index === nums.length) {
    //         return [Infinity, -Infinity];
    //     }

    //     if (memo.has(index)) {
    //         return memo.get(index);
    //     }

    //     // Option 1: just pick nums[i] alone
    //     let max = nums[index], min = nums[index];

    //     // Option 2: pick nums[i] and combine with dfs(i+1)
    //     const [nextMax, nextMin] = getMax(index + 1);

    //     if (nextMax !== Infinity && nextMin !== -Infinity) {
    //         min = Math.min(min, nextMin * nums[index], nextMax * nums[index]);
    //         max = Math.max(max, nextMin * nums[index], nextMax * nums[index]);
    //     }

    //     // Option 3: skip nums[i] entirely (take dfs(i+1))
    //     if (nextMax !== Infinity && nextMin !== -Infinity) {
    //         min = Math.min(min, nextMin);
    //         max = Math.max(max, nextMax);
    //     }

    //     memo.set(index, [max, min]);

    //     return [max, min];
    // }

    // return getMax(0)[0];

    // TC: O(n)
    // SC: O(n)
    // Solution: Sorting
    nums.sort((a, b) => a - b);

    const positive = nums.filter(a => a > 0);
    const negative = nums.filter(a => a < 0);

    if (positive.length === 0 && negative.length === 0) return 0;
    else if (positive.length === 0 && negative.length === 1) return nums[nums.length - 1];

    let res = positive.reduce((a, b) => a * b, 1);

    if (negative.length % 2 === 0) {
        res *= negative.reduce((a, b) => a * b, 1);
    } else {
        for (let i = 0; i < negative.length - 1; i++) {
            res *= negative[i];
        }
    }

    return res;
};
