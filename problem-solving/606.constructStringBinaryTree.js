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
// TC: O(n)
// SC: O(n)
// Solution: DFS
var tree2str = function(root) {
    const treeString = [];

    const dfs = (node) => {
        if (!node) return;

        treeString.push('(');
        treeString.push(node.val);

        if (!node.left && node.right) {
            treeString.push('()');
        } else {
            dfs(node.left);
        }

        dfs(node.right);

        treeString.push(')');
    }

    dfs(root);
    // console.log(treeString.slice(1, -1).join(''));
    return treeString.slice(1, -1).join('');
};