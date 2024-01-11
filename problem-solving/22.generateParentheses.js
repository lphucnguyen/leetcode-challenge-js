// Given n pairs of parentheses,
// write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Solution: DFS
// - use a dfs function to generate all combinations of well-formed parentheses
// - if both left and right parentheses are used up, add the current string to the results
// - if there are more left parentheses available, add a left parenthesis
// - if there are more right parentheses available than left parentheses, add a right parenthesis
// - Time Complexity: O(4^n)
// - Space Complexity: O(4^n)

var generateParenthesis = function(n) {
    const results = [];

    const dfs = (str, left, right) => {
        // If both left and right parentheses are used up, add the current string to the results
        if (left === 0 && right === 0) {
            results.push(str);
            return;
        }
        // If there are more left parentheses available, add a left parenthesis
        if (left > 0) {
            dfs(str + "(", left - 1, right);
        }
        // If there are more right parentheses available than left parentheses, add a right parenthesis
        if (right > left) {
            dfs(str + ")", left, right - 1);
        }
    }

    const left = right = n;
    dfs("", left, right);

    return results;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
