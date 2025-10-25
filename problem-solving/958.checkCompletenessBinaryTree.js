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
// TC: O(n)
// SC: O(n)
// Solution: BFS
// Check each level of tree, if there is any level that have format [a, null, b], Ex: [4, 5, null, 7] return false
// Otherwise return true
var isCompleteTree = function(root) {
    let queue = [root], seenNull = false;

    while (queue.length) {
        const queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            const node = queue.shift();

            if (!node){
                seenNull = true;
            } else {
                if (seenNull) return false;

                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }

    return true;
};