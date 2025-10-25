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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
// TC: O(n)
// SC: O(n)
// Solution: BFS
var addOneRow = function(root, val, depth) {
    if (depth === 1) return new TreeNode(val, root);

    const queue = [root];
    // Store the level at 1st level to queue
    while (depth - 1 > 1) {
        const queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        depth--;
    }

    for (const node of queue) {
        node.left = new TreeNode(val, node.left);
        node.right = new TreeNode(val, null, node.right);
    }

    // console.log(root);
    return root;
};