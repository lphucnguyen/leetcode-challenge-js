

var shortestPath = function(strArr) {
    let numberOfNodes = parseInt(strArr[0]);
    let root = strArr[1];
    let goal = strArr[numberOfNodes];
    let nodes = strArr.slice(1, parseInt(numberOfNodes) + 1);
    let vertices = strArr.slice(parseInt(numberOfNodes) + 1);
    let adjacent = {};

    nodes.forEach(node => {
        adjacent[node] = [];
    });

    vertices.forEach(vertex => {
        v = vertex.split('-');
        adjacent[v[0]].push(v[1]);
        adjacent[v[1]].push(v[0]);
    });

    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;

    const edges = [];
    edges[root] = 0;

    const predecessors = [];
    predecessors[root] = null;

    const buildPath = (goal, root, predecessors) => {
        const stack = [];
        stack.push(goal);

        let u = predecessors[goal];

        while(u != root) {
            stack.push(u);
            u = predecessors[u];
        }

        stack.push(root);

        let path = stack.reverse().join('-');

        return path;
    }

    while(queue.length) {
        let v = queue.shift();

        if (v === goal) {
            return buildPath(goal, root, predecessors);
        }

        for (let i = 0; i < adjacent[v].length; i++) {
            if (!discovered[adjacent[v][i]]) {
                discovered[adjacent[v][i]] = true;
                queue.push(adjacent[v][i]);
                edges[adjacent[v][i]] = edges[v] + 1;
                predecessors[adjacent[v][i]] = v;
            }
        }
    }

    return false;
};

console.log(shortestPath(["4","X", "Y", "Z", "W", "X-Y","Y-Z","X-W"])); // X-W
console.log(shortestPath(["4","A","B","C","D","A-B","B-D","B-C","C-D"])); // A-B-D
console.log(shortestPath(["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"])); // A-C-D-F