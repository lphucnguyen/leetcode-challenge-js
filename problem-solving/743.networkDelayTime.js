/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// TC: O(n^2 logn)
// SC: o(n)
// Solution: Graph + BFS(MinPriorityQueue)
var networkDelayTime = function(times, n, k) {
    const visited = new Set();
    const graph = {};

    for (const [u, v, w] of times) {
        if (!graph[u]) {
            graph[u] = [];
        }

        graph[u].push([v, w]);
    }

    const minHeap = new MinPriorityQueue((item) => item[1]);
    minHeap.enqueue([k, 0]);

    let delays = 0;

    while (minHeap.size() > 0) {
        const [node, time] = minHeap.dequeue();

        if (visited.has(node)) continue;

        visited.add(node);
        delays = Math.max(delays, time);

        for (const [neighbor, addTime] of (graph[node] || [])) {
            if (visited.has(neighbor)) continue;

            minHeap.enqueue([neighbor, time + addTime]);
        }
    }

    if (visited.size === n) {
        return delays;
    }

    return -1;
    console.log(delays);
};