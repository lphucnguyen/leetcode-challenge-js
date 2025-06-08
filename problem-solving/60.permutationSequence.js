/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// TC: O(n)
// SC: O(n)
// Solution: Math

var getPermutation = function(n, k) {
    const fact = new Array(n + 1).fill(1);
    const nums = [];
    let result = '';

    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    for (let i = 2; i <= n; i++) {
        fact[i] = fact[i - 1] * i;
    }

    --k;

    // console.log(fact);

    for (let i = n - 1; i >= 0; i--) {
        const j = Math.floor(k / fact[i]);
        k %= fact[i];
        result += '' + nums[j];
        nums.splice(j, 1);
    }

    return result;
};