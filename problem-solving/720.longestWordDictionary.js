/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    // Solution: Hashtable
    words.sort();
    let set = new Set(), longest = "";

    for (const word of words) {
        if (word.length === 1 || set.has(word.slice(0, word.length - 1))) {
            set.add(word);

            if (word.length > longest.length) {
                longest = word;
            }
        }
    }

    return longest;

    // // Solution: TrieNode
    // function TrieNode() {
    //     this.children = new Map();
    //     this.end = false;
    // }

    // const root = new TrieNode();

    // // TC: O(n)
    // // SC: O(1)
    // const insert = (word) => {
    //     let current = root;

    //     for (const c of word) {
    //         if (!current.children.has(c)) {
    //             current.children.set(c, new TrieNode());
    //         }

    //         current = current.children.get(c);
    //     }

    //     current.end = true;
    // }

    // // TC: O(n)
    // // SC: O(1)
    // const search = (word) => {
    //     let current = root;

    //     for (const c of word) {
    //         if (!current.children.has(c)) return false;
    //         current = current.children.get(c);
    //     }

    //     return current.end;
    // }

    // words.sort();
    // let longest = '';
    // for (word of words) {
    //     if (word.length === 1) {
    //         insert(word);

    //         // In case when [a, ap, app, b]
    //         // b length is 1, but it is not larger than app
    //         if (word.length > longest.length) {
    //             longest = word;
    //         }
    //     } else {
    //         if (search(word.slice(0, word.length - 1))) {
    //             insert(word);

    //             if (word.length > longest.length) {
    //                 longest = word;
    //             }
    //         }
    //     }
    // }

    // // console.log(longest);
    // return longest;
};