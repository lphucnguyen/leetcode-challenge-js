function seqLengthByDP(arr, k) {
    let n = arr.length;

    // Initialize the DP table
    let dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(1e9));

    // Base case: If the sum is 0, we need 0 elements
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }

    // Fill the DP table iteratively
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            // If the current element is greater than the current sum
            if (arr[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            }
            // If the current element is less than or equal to the current sum
            else {
                // Take the minimum of the two cases:
                // 1. Include the current element
                // 2. Exclude the current element
                dp[i][j] = Math.min(dp[i - 1][j - arr[i - 1]] + 1, dp[i - 1][j]);
            }
        }
    }
    // Check if the result is greater than or equal to 1e9
    return dp[n][k] >= 1e9 ? -1 : dp[n][k];
}

var seqLengthByRecursive = function (arr, k) {
    const dfs = (arr, k) => {
        if (k === 0) {
            return 0;
        }

        let min = Number.MAX_VALUE;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= k && arr[i] > 0) {
                // Get the subarray after removing the element at index i
                const array = arr.slice(0, i).concat(arr.slice(i+1));
                // Find the minimum length subsequence from the subarray
                min = Math.min(min, dfs(array, k - arr[i]));
            }
        }

        return min + 1;
    };

    const result = dfs(arr, k);

    return result === Number.MAX_VALUE ? -1 : result;
}

let N = 5;
let K = 4;
let arr = [5, 2, 1, 4];

// Function call
console.log(seqLengthByDP(arr, K));
console.log(seqLengthByRecursive(arr, K));