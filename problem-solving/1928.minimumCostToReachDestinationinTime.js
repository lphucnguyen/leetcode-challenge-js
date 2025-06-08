/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Graph + MinHeap
// https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/2142631/javascript-solution-using-djikstra-s
var minCost = function(maxTime, edges, passingFees) {
    const graph = {};
    for (const [u, v, time] of edges) {
        if (!graph[u]) {
            graph[u] = [];
        }
        if (!graph[v]) {
            graph[v] = [];
        }

        graph[u].push([v, time]);
        graph[v].push([u, time]);
    }

    const minTime = Array(passingFees.length).fill(Infinity);
    minTime[0] = 0;

    // Find the minimum cost, so MinHeap depend on the cost of item
    const minHeap = new MinPriorityQueue(item => item.cost);
    // Store cost, time to the city, and the current city
    minHeap.enqueue({cost: passingFees[0], time: 0, city: 0});

    while (!minHeap.isEmpty()) {
        const {cost, time, city} = minHeap.dequeue();

        if (city === passingFees.length - 1) return cost;

        for (const [nextCity, travelTime] of graph[city]) {
            const newTime = time + travelTime;
            const newCost = cost + passingFees[nextCity];

            if (newTime <= maxTime && newTime < minTime[nextCity]) {
                minTime[nextCity] = newTime;
                minHeap.enqueue({cost: newCost, time: newTime, city: nextCity});
            }
        }
    }

    return -1;
};