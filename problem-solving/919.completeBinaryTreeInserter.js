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
 */
var CBTInserter = function(root) {
    this.root = root;
};

/** 
 * @param {number} val
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: BFS, because BFS will run from left to right in the level
// In the requirement: 'all nodes are as far left as possible.' push to left most
CBTInserter.prototype.insert = function(val) {
    const root = this.root, queue = [root];

    while (queue.length) {
        const node = queue.shift();

        if (node.left === null) {
            node.left = new TreeNode(val);
            return node.val;
        }

        if (node.right === null) {
            node.right = new TreeNode(val);
            return node.val;
        }

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */