/**
 * @param {string[]} words
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Greedy + Hastable
// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2641675/javascript-easy-understanding-and-commented
var longestPalindrome = function(words) {
    const map = {};
    let count = 0;

    const reverse = (word) => word.split('').reverse().join('');

    for (const word of words) {
        const reverseWord = reverse(word);

        // We check, if the original word is in the array, that means we have a palindrome. So we decrement from the occurence of the word in the hash and increment the counter by 4 because that means we have a string with length of 4 that is a palindrome.
        if (map[word]) {
            map[word]--;
            count += 4;
        } else {
            map[reverseWord] = (map[reverseWord] || 0) + 1;
        }
    }

    // We check if there are any more occurences of a palindrome word. We do that by filtering the keys of the object, inside of the filter we check wether the current string has any occurences in the hash AND if the reversed string is equal to the original string from the hash.
    const sameWord = Object.keys(map).filter(word => map[word] && word === reverse(word));
    if (sameWord.length) count += 2;

    return count;
};