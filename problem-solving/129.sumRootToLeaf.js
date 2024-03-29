// You are given the root of a binary tree containing digits from 0 to 9 only.
// Each root-to-leaf path in the tree represents a number.
// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
// A leaf node is a node with no children.


// Example 1:

//      1
//     / \
//    2   3

// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

// Example 2:

//      4
//     / \
//    9   0
//   / \
//  5   1

// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

// Solution 1: DFS
// - create a result variable
// - if no root, return result
// - create a findPath function
//   - push root.val to path
//   - if no root.left and no root.right
//     - add parseInt(path.join('')) to result
//   - if root.left, call findPath(root.left, path)
//   - if root.right, call findPath(root.right, path)
//   - pop root.val from path
// - call findPath(root, [])
// - return result
// - Time Complexity: O(n)
// - Space Complexity: O(1)

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
var sumNumbers = function(root) {
    let result = 0;

    if (!root) return result;

    const findPath = (root, path) => {
        path.push(root.val);

        if (!root.left && !root.right) {
            result += parseInt(path.join(''));
        }
        if (root.left) findPath(root.left, path);
        if (root.right) findPath(root.right, path);

        path.pop();
    }

    findPath(root, []);

    return result;
};