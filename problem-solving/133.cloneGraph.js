/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    // BFS
    // TC: O(n)
    // SC: O(1)
    // if(!node) return null
    // const newNode = new Node(node.val);
    // const visited = new Map();
    // const queue = [node];

    // visited.set(node.val, newNode);

    // while (queue.length) {
    //     const node = queue.shift();

    //     for (const neighbor of node.neighbors) {
    //         if (!visited.has(neighbor.val)) {
    //             const newNeighbor = new Node(neighbor.val);
    //             queue.push(neighbor);
    //             visited.set(neighbor.val, newNeighbor);
    //         }

    //         visited.get(node.val).neighbors.push(visited.get(neighbor.val));
    //     }
    // }

    // return newNode;

    // DFS
    // TC: O(n)
    // SC: O(n)
    if (!node) return null;
    const visited = new Map();

    const dfs = (node) => {
        if (visited.has(node.val)) return visited.get(node.val);

        const newNode = new Node(node.val);
        visited.set(node.val, newNode);

        for (const neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }

        return newNode;
    }

    return dfs(node);
};