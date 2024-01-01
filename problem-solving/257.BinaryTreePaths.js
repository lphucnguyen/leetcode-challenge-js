// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Example 1:
//      1
//     / \
//    2   3
//     \
//      5
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]

// Solution: DFS
// Time Complexity: O(n)

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const results = [];

    if (!root) return results;

    const dfs = (root, path) => {
        path.push(root.val);

        if (!root.right && !root.left) results.push([...path].join('->'));
        if (root.left) dfs(root.left, path);
        if (root.right) dfs(root.right, path);

        path.pop();
    }

    dfs(root, []);

    return results;
};