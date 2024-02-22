// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


// Solution 1: Use build-in function trim
// - Use build-in function trim to remove leading and trailing spaces
// - Create a variable result to store the result
// - Create a variable endWord to store the end position of the word
// - Iterate through the string from the end to the start
// - If the current character is a space, slice the word from the current position to endWord
// - If the word is not empty, add the word to the result
// - Set the endWord to the current position
// - Return the result
// - Time complexity is O(n)
// - Space complexity is O(1)

// Solution 2: Use while loop
// - Create a variable result to store the result
// - Create a variable startWord to store the start position of the word
// - Iterate through the string from the end to the start
// - Remove space from the right
// - Save the endWord position to slice
// - Find the startWord position
// - Slice the word from the startWord to endWord
// - Return the result
// - Time complexity is O(n)
// - Space complexity is O(1)


var reverseWords = function(s) {
    // // Use build-in function trim - Time complexity: O(n)
    // s = s.trim();
    // let result = "";
    // let endWord = s.length;

    // for (let i = s.length - 1; i >= 0; i--) {
    //     if (s.charAt(i) === " ") {
    //         const str = s.slice(i + 1, endWord);

    //         // If str from i to endWord is not space
    //         // str !== "" because get str from i + 1 to endWord
    //         if (str !== "") {
    //             result += str + " ";
    //         }
    //         endWord = i;
    //     }
    // }

    // result += s.slice(0, endWord);

    // return result;


    // Use while loop - Time complexity: O(n)
    let result = "";
    let startWord = s.length - 1;

    while (startWord >= 0) {
        // Remove space from right
        while (startWord >= 0 && s.charAt(startWord) === " ") startWord--;
        // Save endWord position to slice
        let endWord = startWord;

        if (startWord < 0) break;

        // Find the startWord position
        while (startWord >= 0 && s.charAt(startWord) !== " ") startWord--;
        // Slice the word in string from startWord to endWord
        result += " " + s.slice(startWord + 1, endWord + 1);
    }

    return result.slice(1);
};


console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"