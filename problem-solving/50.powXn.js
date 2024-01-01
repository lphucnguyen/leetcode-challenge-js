// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Solution: Divide and conquer
// - If n is 0, return 1
// - If n is negative, return 1 / pow(x, -n)
// - If n is odd, return x * pow(x, n-1)
// - If n is even, return pow(x*x, n/2) --> Ex: x^4 = (x^2)^2
// Time Complexity: O(log n)


var myPow = function(x, n) {
    const pow = (x, n) => {
        if (n == 0) return 1;
        else if (n < 0) return 1 / pow(x, -n);
        else if (n % 2 === 1) return x * pow(x, n-1);
        else return pow(x*x, n/2);
    }

    return pow(x, n);
};

console.log(myPow(2.00000, 10));