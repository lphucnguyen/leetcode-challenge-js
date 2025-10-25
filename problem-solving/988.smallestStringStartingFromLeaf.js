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
 * @return {string}
 */
// TC: O(n * h), h is the heigh of tree
// SC: O(1)
// Solution: Backtracking
var smallestFromLeaf = function(root) {
    let smallest = '';

    const backtrack = (node, path) => {
        if (node.left === null && node.right === null) {
            const currentString = String.fromCharCode(97 + node.val) + path;

            if (smallest === '' || smallest.localeCompare(currentString) > 0) {
                smallest = currentString;
            }
            return;
        }

        if (node.left) backtrack(node.left, String.fromCharCode(97 + node.val) + path);
        if (node.right) backtrack(node.right, String.fromCharCode(97 + node.val) + path);
    }

    backtrack(root, '');

    return smallest;
};