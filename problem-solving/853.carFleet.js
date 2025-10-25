/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
// TC: O(n)
// SC: O(n)
// Solution: Greedy
var carFleet = function(target, position, speed) {
    const cars = position.map((p, i) => {
        return [p, (target - p) / parseInt(speed[i])];
    });

    cars.sort((a, b) => b[0] - a[0]);

    // Using greedy
    // let currentTime = 0, fleets = 0;
    // for (const [position, time] of cars) {
    //     if (time > currentTime) {
    //         fleets++;
    //         currentTime = time;
    //     }
    // }

    // return fleets;

    // Using Stack
    const stack = [];
    for (const [position, time] of cars) {
        if (stack.length === 0 || stack.at(-1) < time) {
            stack.push(time);
        }
    }

    return stack.length;
};