/**
 * @param {string[]} names
 * @return {string[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Hashtable
var getFolderNames = function(names) {
    const nameUnique = new Map();

   for (const name of names) {
       if (!nameUnique.has(name)) {
           nameUnique.set(name, 1);
           continue;
       }

       let count = nameUnique.get(name);
       let newName = `${name}(${count})`;

       // find the next available suffix
       while (nameUnique.has(newName)) {
           count++;
           newName = `${name}(${count})`;
       }

       nameUnique.set(newName, 1); 
       nameUnique.set(name, count + 1);   // update next suffix for base name
   }

   // console.log(nameUnique);
   return [...nameUnique.keys()];
};