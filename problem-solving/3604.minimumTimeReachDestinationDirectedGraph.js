/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// TC: O(n)
// SC: O(n^2)
// Solution: Heap
var minTime = function(n, edges) {
    const graph = new Array(n).fill(0).map(item => new Array());

    for (const [node, neighbor, startTime, endTime] of edges) {
        graph[node].push([neighbor, startTime, endTime]);
    }

    const heap = new PriorityQueue((a, b) => {
        if (!b) return;

        return a.time - b.time;
    });
    heap.enqueue({ time: 0 , node: 0});

    const minTimes = new Array(n).fill(Infinity);
    minTimes[0] = 0;

    while (!heap.isEmpty()) {
        const { time, node } = heap.dequeue();

        if (time > minTime[node]) continue;

        if (node === n - 1) return time;

        for (const [neighbor, startTime, endTime] of graph[node]) {
            const needTime = Math.max(time, startTime);

            if (needTime <= endTime) {
                const nextTime = needTime + 1;

                if (nextTime < minTimes[neighbor]) {
                    minTimes[neighbor] = nextTime;
                    heap.enqueue({ time: nextTime, node: neighbor });
                }
            }
        }
    }

    // console.log(graph);
    return -1;
};