var isFascinating = function(n) {
    const str = '' + n + 2*n + 3*n;
    const setStr = new Set(str.split(''));

    return setStr.size === 9 && str.length === 9 && !setStr.has('0');
};

console.log(isFascinating(192));