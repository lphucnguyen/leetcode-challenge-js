/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
// TC: O(n * m), m is the length of the gene
// SC: O(n)
// Solution: BFS + Hashtable
var minMutation = function(startGene, endGene, bank) {
    const charChoices = ['A', 'C', 'G', 'T'];
    const queue = [[startGene, 0]], bankSet = new Set(bank), visited = new Set();

    while (queue.length) {
        const [gene, mutation] = queue.shift();

        if (gene === endGene) {
            return mutation;
        }

        visited.add(gene);

        for (let i = 0; i < gene.length; i++) {
            for (const char of charChoices) {
                const chars = gene.split('');
                // Replace index gene to try finding in the bank set
                chars[i] = char;
                const newGene = chars.join('');

                if (bankSet.has(newGene) && !visited.has(newGene)) {
                    queue.push([newGene, mutation + 1]);
                }
            }
        }
    }

    return -1;
};