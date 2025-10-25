/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// TC: O(q * n), with q is the number of query
// SC: O(n)
// Solution: 
var calcEquation = function(equations, values, queries) {
    const graph = {};

    const dfs = (src, dest, visited) => {
        if (!(src in graph) || !(dest in graph)) return -1;
        if (src === dest) return 1;

        visited.add(src);

        for (const neighbor in graph[src]) {
            if (visited.has(neighbor)) continue;

            const res = dfs(neighbor, dest, visited);

            if (res !== -1) {
                return res * graph[src][neighbor];
            }
        }

        return -1.0;
    }

    for (let i = 0; i < equations.length; i++) {
        const [src, dest] = equations[i];

        if (!graph[src]) graph[src] = {};
        if (!graph[dest]) graph[dest] = {};

        graph[src][dest] = values[i];
        graph[dest][src] = 1 / values[i];
    }

    const res = [];
    for (const [src, dest] of queries) {
        const visited = new Set();

        res.push(dfs(src, dest, visited));
    }

    // console.log(res);
    return res;
};