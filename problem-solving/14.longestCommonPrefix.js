// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Solution: Using sort and compare
// - Sort the array follow the alphabetical order
// - Compare the first and the last element
// - If the first and the last element have the same character at the same index, add it to the result
// - If not, return the result
// O(nlogn) in time
// O(n) in space


var longestCommonPrefix = function(strs) {
    strs = strs.sort();
    const first = strs.at(0);
    const last = strs.at(strs.length - 1);

    let result = '';

    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] === last[i]) {
            result += first[i];
        }
        else return result;
    }

    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["flower","low","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));