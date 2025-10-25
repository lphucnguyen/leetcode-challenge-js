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
 * @return {number[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: DFS
// Return all sub sum of tree with frequence equal max frequence
var findFrequentTreeSum = function(root) {
    const freq = new Map();
    let maxFreq = 0;

    const dfs = (node) => {
        if (!node) return 0;

        const left = dfs(node.left), right = dfs(node.right);
        const sum = node.val + left + right;
        freq.set(sum, (freq.get(sum) || 0) + 1);
        maxFreq = Math.max(maxFreq, freq.get(sum));

        return sum;
    }

    dfs(root);

    const results = [];
    for (const [sum, frequence] of freq) {
        if (frequence === maxFreq) {
            results.push(sum);
        }
    }

    // console.log(results);
    return results;
};