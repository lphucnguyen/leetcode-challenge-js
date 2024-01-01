// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

var countAndSay = function(n) {
    const convertToSequence = (numberString) => {
        let result = '';
        let time = 0;
        let first = numberString[0];

        for (let i = 0; i < numberString.length; i++) {
            if (numberString[i] === first) {
                time++;
            } else {
                result += time + first;
                first = numberString[i];
                time = 1;
            }
        }

        return result + time + first;
    }


    let result = '1';
    for (let i = 1; i < n; i++) {
        result = convertToSequence(result);
    }

    return result;
};