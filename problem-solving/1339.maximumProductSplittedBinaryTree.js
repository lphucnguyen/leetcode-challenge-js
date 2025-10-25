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
// TC: O(2^n)
// SC: O(n)
// Solution: DFS
var maxProduct = function(root) {
    const MOD = 10**9 + 7;
    let total = 0, stack = [root];

    while (stack.length) {
        const node = stack.pop();

        total += node.val;

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    let max = 0;

    const dfs = (node) => {
        if (!node) return 0;

        const leftSide = dfs(node.left);
        const rightSide = dfs(node.right);

        const sum = (node.val + leftSide + rightSide) % MOD;
        max = Math.max(max, (total - sum) * sum);

        return node.val + leftSide + rightSide;
    }

    dfs(root);

    // console.log(max);
    return max % MOD;
};