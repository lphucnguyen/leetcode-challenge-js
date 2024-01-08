function minSub(array, target) {
    var sieve = [[]];

    for (var i in array) {
        var temp = [];

        for (var j in sieve) {
            var val = Number(j) + array[i];
            if (!sieve[val] || sieve[val].length > sieve[j].length + 1) {
                temp[val] = sieve[j].concat([array[i]]);
            }
        }

        for (var j in temp) {
            if (Number(j) <= target) {
                sieve[j] = temp[j].slice();
            }
        }
    }

    var max = 0;
    for (var j in sieve) {
        if (Number(j) > max) {
            max = Number(j);
        }
    }

    return sieve[max];
}

// console.log(minSub([4, 10, 14], 14));
// console.log(minSub([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0], 8));
// console.log(minSub([5, 1, 5, 10 , 9], 17));
console.log(minSub([5, 2, 1, 2], 4));