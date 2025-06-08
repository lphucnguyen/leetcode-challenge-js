/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
// TC: O(n)
// SC: O(n)
// Solution: BFS
var levelOrder = function(root) {
    if (!root) return [];

    const queue = [root], levels = [];

    while (queue.length) {
        const level = [], queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            const top = queue.shift();

            level.push(top.val);

            for (const child of top.children) {
                queue.push(child);
            }
        }

        levels.push(level);
    }

    return levels;
};

const root = new _Node(1, [new _Node(3, [new _Node(5), new _Node(6)]), new _Node(2), new _Node(4)]);

console.log(levelOrder(root)); // [[1], [3, 2, 4], [5, 6]]
// Explanation:
// 1
// 3 2 4
// 5 6
console.log(levelOrder(null)); // []
