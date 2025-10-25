/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// TC: O(n^2)
// SC: O(n)
// Solution: Binary Search Tree (Find the position to insert the one by one item)
var bstFromPreorder = function(preorder) {
    const root = new TreeNode(preorder[0]);

    const insertToBST = (node, val) => {
        let current = node;

        while (current !== null) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = new TreeNode(val);
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = new TreeNode(val);
                    break;
                } else {
                    current = current.right;
                }
            }
        }

        return current;
    }

    for (let i = 1; i < preorder.length; i++) {
        insertToBST(root, preorder[i]);
    }

    return root;
};