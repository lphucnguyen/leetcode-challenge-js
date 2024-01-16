// Given a string s and a dictionary of strings wordDict,
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Solution: Dynamic Programming
// - create a dp array with length of s.length + 1, fill it with false
// - set dp[0] to true -> this is because we need to start somewhere
// - loop through from 1 to s.length
//   - loop through from 0 to i
//     - set word to s.slice(j, i)
//     - if dp[j] is true and wordDict includes word
//       - set dp[i] to true
//       - break
// - return dp.at(-1)


var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            const word = s.slice(start, end);
            console.log(`start=${start}, end=${end} ${word}`);
            if (dp[start] === true && wordDict.includes(word)) {
                dp[end] = true;
                break;
            }
        }
        console.log(dp);
    }

    return dp.at(-1);
};

console.log(wordBreak("leetcode", ["leet","code"])); // true
// start=0, end=1 l
// [true,  false, false, false, false, false, false, false, false]
// start=0, end=2 le
// start=1, end=2 e
// [ true, false, false, false, false, false, false, false, false]
// start=0, end=3 lee
// start=1, end=3 ee
// start=2, end=3 e
// [true, false, false, false, false, false, false, false, false]
// start=0, end=4 leet
// [true,  false, false, false, true,  false, false, false, false]
// start=0, end=5 leetc
// start=1, end=5 eetc
// start=2, end=5 etc
// start=3, end=5 tc
// start=4, end=5 c
// [true,  false, false, false, true,  false, false, false, false]
// start=0, end=6 leetco
// start=1, end=6 eetco
// start=2, end=6 etco
// start=3, end=6 tco
// start=4, end=6 co
// start=5, end=6 o
// [true,  false, false, false, true,  false, false, false, false]
// start=0, end=7 leetcod
// start=1, end=7 eetcod
// start=2, end=7 etcod
// start=3, end=7 tcod
// start=4, end=7 cod
// start=5, end=7 od
// start=6, end=7 d
// [true,  false, false, false, true,  false, false, false, false]
// start=0, end=8 leetcode
// start=1, end=8 eetcode
// start=2, end=8 etcode
// start=3, end=8 tcode
// start=4, end=8 code
// [true,  false, false, false, true,  false, false, false, true]

console.log(wordBreak("cars", ["car","ca","rs"])); // true
// start=0, end=1 c
// [ true, false, false, false, false ]
// start=0, end=2 ca
// [ true, false, true, false, false ]
// start=0, end=3 car
// [ true, false, true, true, false ]
// start=0, end=4 cars
// start=1, end=4 ars
// start=2, end=4 rs
// [ true, false, true, true, true ]

// console.log(wordBreak("applepenapple", ["apple","pen"])); // true
// console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // false