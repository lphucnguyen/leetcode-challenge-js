// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Solution: Two Pointers
// - sort nums
// - loop through nums (pointer1)
//   - if pointer1 is greater than 0 and nums[pointer1] is equal to nums[pointer1-1], continue
//   - set pointer2 to pointer1 + 1
//   - set pointer3 to nums.length - 1
//   - while pointer2 is less than pointer3
//     - if nums[pointer1] + nums[pointer2] + nums[pointer3] is greater than 0, decrement pointer3
//     - else if nums[pointer1] + nums[pointer2] + nums[pointer3] is less than 0, increment pointer2
//     - else
//       - push [nums[pointer1], nums[pointer2], nums[pointer3]] to results
//       - while nums[pointer2] is equal to nums[pointer2+1], increment pointer2
//       - while nums[pointer3] is equal to nums[pointer3-1], decrement pointer3
//       - increment pointer2
//       - decrement pointer3
// - return results
// Time Complexity: O(n^2)
// Space Complexity: O(1)


var threeSum = function(nums) {
    const results = [];
    nums = nums.sort((a, b) => a - b);

    // Notice that the solution set must not contain duplicate triplets.
    // So we need skip duplicate values

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        // Skip duplicate values of the first number
        if (i > 0 && nums[i] === nums[i-1]) continue;

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            }
            else if(nums[i] + nums[j] + nums[k] < 0) {
                j++;
            }else {
                results.push([nums[i], nums[j], nums[k]]);
                // Skip duplicate values of the second number
                while (nums[j] === nums[j+1]) j++; 
                // Skip duplicate values of the third number
                while (nums[k] === nums[k-1]) k--;
                j++;
                k--;
            }
        }
    }

    return results;
};