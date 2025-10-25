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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let total = 0;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.right);

        total += node.val;
        node.val = total;

        dfs(node.left);
    }

    dfs(root);

    return root;
};