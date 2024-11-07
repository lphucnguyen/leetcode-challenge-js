// An n-bit gray code sequence is a sequence of 2n integers where:
// Every integer is in the inclusive range [0, 2n - 1],
// The first integer is 0,
// An integer appears no more than once in the sequence,
// The binary representation of every pair of adjacent integers differs by exactly one bit, and
// The binary representation of the first and last integers differs by exactly one bit.
// Given an integer n, return any valid n-bit gray code sequence.


// Example 1:
// Input: n = 2
// Output: [0,1,3,2]
// Explanation:
// The binary representation of [0,1,3,2] is [00,01,11,10].
// - 00 and 01 differ by one bit
// - 01 and 11 differ by one bit
// - 11 and 10 differ by one bit
// - 10 and 00 differ by one bit
// [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
// - 00 and 10 differ by one bit
// - 10 and 11 differ by one bit
// - 11 and 01 differ by one bit
// - 01 and 00 differ by one bit

// Example 2:
// Input: n = 1
// Output: [0,1]

// Solution: Recursion
// - Create a function dfs that takes in a parameter n.
// - If n is equal to 1, return ["0", "1"].
// - Create a variable results and set it to an empty array.
// - Create a variable temp and set it to the result of calling dfs with n - 1.
// - Iterate through temp and add "0" + temp[i] to results.
// - Iterate through temp in reverse and add "1" + temp[i] to results.
// - Return results.
// - Call dfs with n and store the result in results.
// - Iterate through results and convert each item to a number using parseInt with a base of 2.
// - Return results.
// Time complexity: O(2^n)
// Space complexity: O(n)

var grayCode = function(n) {
    // Suppose we are given all codes for n = 2 , [00 , 01 , 11 , 10]
    // and required to find for n = 3
    // means n = 3,
    // for n = 3 , we have 2 ^ 3 = 8 codes [4 created by putting 0 in front of 2-bit codes + 4 created by putting 1 in front of 2-bit codes in reverse fashion]

    // find n-bit codes with the help of (n-1) bit codes
    // actually 3-bit codes can be build using 2-bit codes by first placing 0 in front of all codes and then 1 bit codes in reverse fashion

    // Put 0 in front of all 2-bit codes
    // 00  => 000
    // 01  => 001
    // 11  => 011
    // 10  => 010
    // half of 3-bit codes are ready!!

    // Other half can be build putting 1 in front of all 2-bit codes in reverse fashion[because if we put in forward order we get 2 changed bits in one pair
    // Put 1 in front of all 2-bit codes in reverse fashion
    // 10  => 110
    // 11  => 111
    // 01  => 101
    // 00  => 100
    // so 3-bit codes are = [000 , 001 , 011 , 010 , 110 , 111 , 101 , 100]

    const dfs = (n) => {
        if (n === 1) return ["0", "1"];

        let results = [];
        let temp = dfs(n-1);

        for (let i = 0; i < temp.length; i++) {
            results.push("0" + temp[i]);
        }
        for (let i = temp.length - 1; i >= 0; i--) {
            results.push("1" + temp[i]);
        }

        return results;
    }

    let results = dfs(n);
    results = results.map((item) => parseInt(item, 2));

    return results;

    // const results = [];
    // for (let i = 0; i < 1 << n; i++) {
    //     results.push(i ^ (i >> 1));
    // }
    // return results;
};