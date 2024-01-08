
var findAllSubsequenceEqualK = function (arr, k) {
    const results = [];
    arr = arr.sort((a, b) => a - b);

    const dfs = (index, k, path) => {
        if (k === 0) {
            results.push(path);
            return;
        }

        for (let i = index; i < arr.length; i++) {
            if (arr[i] <= k && arr[i] > 0) {
                dfs(i + 1, k - arr[i], path.concat(arr[i]));
            }
        }
    }

    dfs(0, k, []);
    return results;
}

// console.log(findAllSubsequenceEqualK([4, 2, 1, 3, 2], 4));
console.log(findAllSubsequenceEqualK([5, 2, 1, 2], 4));