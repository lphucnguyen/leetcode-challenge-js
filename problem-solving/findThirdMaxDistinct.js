var thirdMax = function(nums) {
    let numsSorted = [...new Set(nums.sort((a, b) => b - a))];

    if (numsSorted.length >= 3) {
        return numsSorted.at(2);
    }else return numsSorted.at(0);
};

console.log(thirdMax([1,2,2,5,3,5]));