/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefinedˇ ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: DFS + Hashtable
var findDuplicateSubtrees = function(root) {
    const map = new Map(), results = new Set();

    const dfs = (node) => {
        if (!node) return '#';

        const key = node.val + '|' + dfs(node.left) + '|' + dfs(node.right);
        if (map.has(key)) {
            results.add(map.get(key));
        } else {
            map.set(key, node);
        }

        return key;
    }

    dfs(root);

    // console.log(results);
    return [...results];
};