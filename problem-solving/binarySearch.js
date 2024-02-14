const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }

    return left;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));