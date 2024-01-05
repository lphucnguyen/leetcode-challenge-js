// Given a collection of numbers, nums, that might contain duplicates
// return all possible unique permutations in any order.


// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Solution: Backtracking
// - sort nums
// - create findPermutations function
//   - base case: if nums.length is 0, push path to results
//   - Using Set for each level to avoid duplicate
//   - Example: [1, 1, 2] -> [[1,1,2],[1,2,1],[1,1,2],[1,2,1],[2,1,1],[2,1,1]]
//   - loop through nums
//     - if current num is equal to previous num, continue
//     - push current num to path
//     - call findPermutations with nums.slice(0, i).concat(nums.slice(i+1)) and path
//     - pop from path
// - call findPermutations with nums and []
// - return results
// Time Complexity: O(n!)
// Space Complexity: O(n!)

var permuteUnique = function(nums) {
    const results = [];
    nums = nums.sort((a, b) => a - b);

    const findPermutations = (nums, path) => {
        if (nums.length === 0) {
            results.push([...path]);
        }

        // Using Set for each level to avoid duplicate
        // Example: [1, 1, 2] -> [[1,1,2],[1,2,1],[1,1,2],[1,2,1],[2,1,1],[2,1,1]]
        let setNums = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (setNums.has(nums[i])) continue;
            setNums.add(nums[i]);
            path.push(nums[i]);
            findPermutations(
                nums.slice(0, i).concat(nums.slice(i+1)), path
            );
            path.pop();
        }
    }

    findPermutations(nums, []);

    return results;
};
