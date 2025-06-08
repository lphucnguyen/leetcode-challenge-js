/**
 * @param {number} n
 * @return {number[]}
 */
// TC: O(nlogn)
// SC: O(n)
// Solution: DSF
var lexicalOrder = function(n) {
    const lexicalNumber = [];

    const dfs = (number) => {
        const num = parseInt(number);

        if (num > n) {
            return;
        }

        lexicalNumber.push(num);
        for (let i = 0; i <= 9; i++) {
            dfs(number + '' + i);
        }
    }

    for (let i = 1; i <= 9; i++) {
        dfs(i + '');
    }

    // console.log(lexicalNumber);
    return lexicalNumber;
};