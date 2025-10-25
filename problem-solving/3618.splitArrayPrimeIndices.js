/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function(nums) {
    // const sum = nums.reduce((a, b) => a + b, 0);
    const isPrime = (n) => {
        if (n < 2) return false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }

        return true;
    }

    let sumA = 0, sumB = 0;
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(i)) {
            sumA += nums[i];
        } else {
            sumB += nums[i];
        }
    }

    return Math.abs(sumA - sumB);
};