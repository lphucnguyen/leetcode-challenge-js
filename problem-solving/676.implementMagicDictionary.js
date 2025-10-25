// // Solution: TrieNode
// function TrieNode(){
//     this.children = new Map()
//     this.endOfWord = false;
// }

// var MagicDictionary = function() {
//     this.root = new TrieNode();
// };

// // TC: O(n * m)
// // SC: O(n * m)
// MagicDictionary.prototype.buildDict = function(dictionary) {
//     for (const word of dictionary) {
//         let current = this.root;

//         for (const c of word) {
//             if (!current.children.has(c)) {
//                 current.children.set(c, new TrieNode());
//             }

//             current = current.children.get(c);
//         }

//         current.endOfWord = true;
//     }
// };

// // TC: O(n * m)
// // SC: O(n * m)
// MagicDictionary.prototype.search = function(searchWord) {
//     const root = this.root;

//     const dfs = (node, count, index) => {
//         if (count > 1) return false;
//         if (index === searchWord.length) return count === 1 && node.endOfWord;

//         for (const [char, nextNode] of node.children) {
//             let c = 0;

//             if (searchWord[index] !== char) {
//                 c++;
//             }

//             if (dfs(nextNode, count + c, index + 1)) {
//                 return true;
//             }
//         }

//         return false;
//     }

//     return dfs(root, 0, 0);
// };

// Simple Solution
var MagicDictionary = function() {
    this.words = null;
};

// TC: O(1)
// SC: O(n)
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.words = new Set(dictionary);
};

// TC: O(n * m)
// SC: O(1)
MagicDictionary.prototype.search = function(searchWord) {
    for (const word of this.words) {
        if (word.length !== searchWord.length) continue;

        let diff = 0;
        for (let i = 0; i < word.length; i++) {
            if (searchWord[i] !== word[i]) {
                diff++;
            }

            if (diff > 1) break;
        }

        if (diff === 1) return true;
    }

    return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */