// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?


// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Solution: Quick Sort
// Sort nums in ascending order using quick sort
// return nums at nums.length - k position
// Time Complexity: O(nlogn)
// Space Complexity: O(1)


var findKthLargest = function(nums, k) {
    const numsSorted = quickSort(nums, 0, nums.length - 1);

    return numsSorted.at(nums.length - k);
};

var swap = function(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

var partition = function(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

var quickSort = function(items, left, right) {
    let index;

    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function quickSort(items, left, right) {
    var index;

    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }

    return items;
}

console.log(findKthLargest([10, 2, 7, 6, 5], 2));