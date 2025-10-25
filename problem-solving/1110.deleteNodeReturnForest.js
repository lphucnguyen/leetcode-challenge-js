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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: BFS
var delNodes = function(root, to_delete) {
    const afterDelete = [], toDeleteSet = new Set(to_delete), queue = [root];

    while (queue.length) {
        const node = queue.shift();

        if (node.left) {
            queue.push(node.left);

            if (toDeleteSet.has(node.left.val)) {
                node.left = null;
            }
        }

        if (node.right) {
            queue.push(node.right);

            if (toDeleteSet.has(node.right.val)) {
                node.right = null;
            }
        }

        if (toDeleteSet.has(node.val)) {
            if (node.left) {
                afterDelete.push(node.left);
            }

            if (node.right) {
                afterDelete.push(node.right);
            }
        }
    }

    if (!toDeleteSet.has(root.val)) {
        afterDelete.push(root);
    }

    // console.log(afterDelete);
    return afterDelete;
};