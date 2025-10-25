/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Greedy
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let i = 0, j = 0, count = 0;
    while (i < players.length && j < trainers.length) {
        // the i player can be matched with at most one trainer
        // if it match plus 1
        if (players[i] <= trainers[j]) {
            count++;
            i++;
        }

        // the j trainer can be matched with at most one player.
        j++;
    }

    return count;
};