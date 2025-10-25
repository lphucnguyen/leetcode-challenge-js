/**
 * @param {string[]} folder
 * @return {string[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Sorting
var removeSubfolders = function(folder) {
    folder = folder.sort();
    const folders = [folder[0]];

    // console.log(folder);
    for (let i = 1; i < folder.length; i++) {
        if (!folder[i].startsWith(folders.at(-1) + '/')) {
            folders.push(folder[i]);
        }
    }

    return folders;
};