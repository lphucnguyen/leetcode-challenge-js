/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
// TC: O(n^2)
// SC: O(n)
// Solution: Graph
var maximalNetworkRank = function(n, roads) {
    const graph = new Array(n).fill(0).map(item => new Set()), degree = {};

    for (const [city, neighbor] of roads) {
        degree[city] = (degree[city] || 0) + 1;
        degree[neighbor] = (degree[neighbor] || 0) + 1;

        graph[city].add(neighbor);
        graph[neighbor].add(city);
    }

    let max = 0;

    for (let city = 0; city < n; city++) {
        for (let other = city + 1; other < n; other++) {
            let rank = (degree[city] || 0) + (degree[other] || 0);

            if (graph[city].has(other)) {
                rank--; // Subtract shared road
            }

            max = Math.max(max, rank);
        }
    }

    return max;
};