/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // DP
    // TC: O(n)
    // SC: O(n)
    // const dp = new Array(target + 1).fill(0);
    // dp[0] = 1;

    // for (let i = 0; i <= target; i++) {
    //     for (const num of nums) {
    //         if (i - num >= 0) {
    //             dp[i] += dp[i - num];
    //         }
    //     }
    // }

    // return dp[target];

    // Memorization
    // TC: O(n * target)
    // SC: O(target)
    const memo = {};
    nums.sort((a, b) => a - b);

    const backtrack = (target) => {
        if (target in memo) {
            return memo[target];
        } else if (target === 0) {
            return 1;
        } else if (target < 0) {
            return 0;
        }

        let count = 0;
        for (const num of nums) {
            count += backtrack(target - num);
        }

        memo[target] = count;
        return count;
    }

    return backtrack(target);
};