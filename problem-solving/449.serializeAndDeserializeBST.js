/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// TC: O(n), where n is the number of nodes in the tree
// SC: O(n), for the results array
// Solution: Pre-Order Traversal to serialize the tree
var serialize = function(root) {
    const results = [];

    // Using Pre-Order(left first, right after) to serialize the tree
    const traverse = (node) => {
        if (!node) {
            results.push('X');
            return;
        }

        results.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    // console.log(results);
    return results.join('.');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// TC: O(n), where n is the number of nodes in the tree
// SC: O(n), for the arrayData
// Solution: Pre-Order Traversal to deserialize the tree
var deserialize = function(data) {
    const arrayData = data.split('.');
    let index = 0;
    // console.log(arrayData);

    // Using Pre-Order(left first, right after) to build the tree
    const traverse = () => {
        const val = arrayData[index];
        index++;

        if (val === 'X') return null;
        const node = new TreeNode(+val);
        node.left = traverse();
        node.right = traverse();

        return node;
    }

    const root = traverse();

    // console.log(root);
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */