/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // stack.length - 1 + (nums.length - i) >= k
        // The condition ensures safety: we only pop if we can still guarantee enough elements remain to form a valid subsequence of length k
        // This make sure that, there is enough element with length is k after pop a element in the stack
        while (stack.length > 0 && stack[stack.length - 1] > num && stack.length - 1 + (nums.length - i) >= k) {
            stack.pop();
        }

        stack.push(num);
    }

    // console.log(stack);
    return stack.slice(0, k);
};