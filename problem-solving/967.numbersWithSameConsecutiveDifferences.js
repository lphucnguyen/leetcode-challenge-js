/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const nums = [];

    const backtrack = (path) => {
        if (path.length > 1 && Math.abs(path.at(-2) - path.at(-1)) !== k) {
            return;
        }

        if (path.length === n) {
            nums.push(parseInt(path.join('')));
            return;
        }

        for (let digit = 0; digit < 10; digit++) {
            if (path.length === 0 && digit === 0) continue;

            path.push(digit);
            backtrack(path);
            path.pop();
        }
    }

    backtrack([], 0);
    // console.log(nums);

    return nums;
};