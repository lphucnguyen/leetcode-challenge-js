// TC: O(n * log(n))
// SC: O(n)
// Solution: BinarySearch + Greedy
var splitArray = function(nums, k) {
    let result = 0;
    let startRange = Math.max(...nums);
    let endRange = 0;

    for (const num of nums) {
        endRange += num;
    }

    // Using Greedy to split array
    const isCanSplit = (largest) => {
        let noOfSplits = 1; // Base case is 1, because we need to find the next split
        let currentSum = 0;

        for (const num of nums) {
            currentSum += num;

            if (currentSum > largest) {
                noOfSplits += 1;
                currentSum = num;
            }
        }

        return noOfSplits <= k;
    }

    while (startRange <= endRange) {
        const mid = startRange + Math.floor((endRange - startRange) / 2);

        if (isCanSplit(mid)) {
            result = mid;
            endRange = mid - 1;
        } else {
            startRange = mid + 1;
        }
    }

    return result;
};