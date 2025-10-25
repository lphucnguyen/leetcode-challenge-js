/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// TC: O(nlogn)
// SC: O(1)
// Solution: Greedy + Two Pointer + Sorting
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);

    let left = 0, right = people.length - 1, numBoat = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        numBoat++;
    }

    // console.log(numBoat);
    return numBoat;
};