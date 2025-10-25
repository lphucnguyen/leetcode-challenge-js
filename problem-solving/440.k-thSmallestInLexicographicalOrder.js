/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    const countSteps = (prefix1, prefix2) => {
        let steps = 0;

        while (prefix1 <= n) {
            steps += Math.min(n + 1, prefix2) - prefix1;
            prefix1 *= 10;
            prefix2 *= 10;
        }

        return steps;
    }

    let current = 1;
    k--;
    while (k > 0) {
        // Count steps from [1, 2) -> [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] -> 11 steps with k = 21
        // Count steps from [1, 2) -> [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100, ..., 199] -> 111 steps with k = 201
        // Count steps from [1, 2) -> [1, 10, 11, 12, 13] -> 11 steps with k = 13
        const steps = countSteps(current, current + 1);

        if (steps <= k) {
            current++;

            k -= steps;
        } else {
            current *= 10;

            k--;
        }
    }

    // console.log(current);
    // console.log(countSteps(1, 2)); // 111 with k = 201, 21 with k = 21
    return current;
};