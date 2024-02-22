// Given an integer array nums that may contain duplicates,
// return all possible subsets(the power set).
// The solution set must not contain duplicate subsets.
// Return the solution in any order.


// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Solution: Backtracking with set
// - Create an empty array results to store the result
// - Sort the array nums in ascending order
// - Create a function dfs to generate the subset
// - The function dfs takes two parameters: path and index
// - Push the path to the results
// - Create a set to store the unique number
// - Iterate through the array nums from index to the end
// - If the set does not contain the number, add the number to the set
// - Call the function dfs with path.concat() and i + 1
// - Return the results
// - Time complexity is O(n * 2^n)
// - Space complexity is O(n)


var subsetsWithDup = function(nums) {
    const results = [];
    // Sort asc array to backtracking subset
    nums.sort((a, b) => a - b);

    const dfs = (path, index) => {
        results.push(path);

        // Use set to avoid duplicate subset
        const set = new Set();
        for (let i = index; i < nums.length; i++) {
            if (!set.has(nums[i])) {
                set.add(nums[i]);
                // Backtracking with path.concat() instead of path.push() and path.pop()
                dfs(path.concat(nums[i]), i + 1);
            }
        }
    }

    dfs([], 0);

    return results;
};


console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[],[0]]
console.log(subsetsWithDup([1, 2, 3])); // [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]