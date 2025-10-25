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
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: BFS
var findBottomLeftValue = function(root) {
    const queue = [root];
    let current = root;

    // Using BFS to find the leftmost value, so we just need to traversal from right to left
    // Queue will push right first, then left later to traversal from right to left
    // Using current to store the leftmost
    while (queue.length) {
        current = queue.shift();

        if (current.right !== null) {
            queue.push(current.right);
        }

        if (current.left !== null) {
            queue.push(current.left);
        }
    }

    // console.log(current);
    return current.val;
};