// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:
// - The left subtree of a node contains only nodes with keys less than the node's key.
// - The right subtree of a node contains only nodes with keys greater than the node's key.
// - Both the left and right subtrees must also be binary search trees.

// Example 1:

//      2
//     / \
//    1   3

// Input: root = [2,1,3]
// Output: true

// Example 2:

//      5
//     / \
//    1   4
//       / \
//      3   6


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Solution: DFS
// - if no root, return false
// - create a dfs function
//   - if no root, return true
//   - if root.val <= leftValue or root.val >= rightValue, return false
//   - return dfs(root.left, leftValue, root.val) && dfs(root.right, root.val, rightValue)
// - return dfs(root, -Infinity, Infinity)
// - Time Complexity: O(n)
// - Space Complexity: O(1)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return false;

    const dfs = (root, leftValue, rightValue) => {
        if (!root) return true;
        if (root.val <= leftValue || root.val >= rightValue) {
            return false;
        }

        return dfs(root.left, leftValue, root.val) && dfs(root.right, root.val, rightValue);
    }

    return dfs(root, -Infinity, Infinity);
};