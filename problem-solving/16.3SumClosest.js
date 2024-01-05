// Given an integer array nums of length n and an integer target,
// find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.


// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Solution: Two Pointers
// - sort nums
// - loop through nums (pointer1)
//   - set pointer2 to pointer1 + 1
//   - set pointer3 to nums.length - 1
//   - while pointer2 is less than pointer3
//     - if sum of nums[pointer1], nums[pointer2], nums[pointer3] is greater than target, decrement pointer3
//     - else if sum of nums[pointer1], nums[pointer2], nums[pointer3] is less than target, increment pointer2
//     - else return sum of nums[pointer1], nums[pointer2], nums[pointer3]
//     - update closest if Math.abs(target - sum) < Math.abs(target - closest)
// - return closest
// Time Complexity: O(n^2)
// Space Complexity: O(1)


var threeSumClosest = function(nums, target) {
    let closest = Number.MAX_VALUE;
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            // If sum is greater than target -> decrement k, because we need to find smaller sum, closet to target
            // If sum is less than target -> increment j, because we need to find greater sum, closet to target
            // If sum is equal to target -> return sum
            if (sum > target) {
                k--;
            }else if (sum < target) {
                j++;
            } else return sum;

            // Update closest if Math.abs(target - sum) < Math.abs(target - closest)
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }
        }
    }

    return closest;
};

console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([0,0,0], 1));