/**
 * @param {number[]} nums
 * @return {number}
 */
// Sliding Window Approach
// The core idea is to let a "window" slide over the array. This window will represent the current contiguous arithmetic sequence.

// Define the Window: Our window is a subarray that is currently arithmetic. We can track its size.
// Slide and Expand: We'll iterate through the array, effectively moving the right edge of our window.
// Check the Property: At each step, we check if the new element can be included in the current arithmetic window.
// If nums[i] extends the sequence (i.e., nums[i] - nums[i-1] == nums[i-1] - nums[i-2]), our arithmetic window grows.
// If it does not, the window is broken, and we must start looking for a new one.
// Count the Slices: When the window grows, we add the number of newly formed slices to our total. An arithmetic window of length k contains k-2 slices that end at its last element. For example:
// [1, 2, 3] (length 3): adds 1 new slice ([1,2,3]).
// [1, 2, 3, 4] (length 4): adds 2 new slices ([2,3,4] and [1,2,3,4]).
// [1, 2, 3, 4, 5] (length 5): adds 3 new slices ([3,4,5], [2,3,4,5], [1,2,3,4,5]). We can keep a currentStreak counter that tracks this value.
// This approach allows us to calculate the total in a single pass.

// TC: O(n)
// SC: O(n)
// Solution: Sliding Window
var numberOfArithmeticSlices = function(nums) {
    // let countSlices = 0, numArithmetic = 0;

    // for (let i = 1; i < nums.length - 1; i++) {
    //     if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
    //         countSlices++;
    //         numArithmetic += countSlices;
    //     } else {
    //         countSlices = 0;
    //     }
    // }

    // return numArithmetic;

    // Sliding Window
    let start = 0, countArithmetic = 0, diff = [];
    for (let i = 1; i < nums.length; i++) {
        diff.push(nums[i] - nums[i - 1]);
    }

    while (start < diff.length) {
        let end = start;

        while (end < diff.length - 1 && diff[end + 1] === diff[end]) {
            end++;
        }

        // Count subarray from start to end
        // Ex: Let's try a longer block. If nums was [1,2,3,4,5], diff would be [1,1,1,1], so len = 4.
        // Sub-blocks of length 2: 3 of them ([1,1], [1,1], [1,1])
        // Sub-blocks of length 3: 2 of them ([1,1,1], [1,1,1])
        // Sub-blocks of length 4: 1 of them ([1,1,1,1])
        // Total = 6 = n(n+1)/2 = 4*3/2
        let len = end - start + 1;
        if (len >= 2) countArithmetic += len * (len - 1) / 2;

        // Start counting from end + 1
        start = end + 1;
    }

    return countArithmetic;
};