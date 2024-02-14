// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Solution: Hash Table
// - Create a hash table to store the anagrams
// - Loop through each string
// - Sort the string to get the key
// - If the key exists, push the string to the hash table
// - If the key does not exist, create a new key-value pair
// - Return the values of the hash table
// Time complexity: O(n^2) beacuse of the sorting built-in function is O(n)
// Space complexity: O(1)

var groupAnagrams = function(strs) {
    // Create a hash table to store the anagrams
    const hashTable = {};

    for (const str of strs) {
        // Sort the string to get the key
        const key = str.split('').sort().join('');

        // If the key exists, push the string to the hash table
        if (hashTable[key]) {
            hashTable[key].push(str);
        } else {
            hashTable[key] = [str];
        }
    }

    return Object.values(hashTable);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]