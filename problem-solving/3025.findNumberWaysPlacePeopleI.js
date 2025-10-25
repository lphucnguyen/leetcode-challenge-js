/**
 * @param {number[][]} points
 * @return {number}
 */
// TC: O(n^2)
// SC: O(n)
// Solution: Sorting + Math
var numberOfPairs = function(points) {
    points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    let count = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i], [x2, y2] = points[j];

            // Check if A(x1, y1) is upper left side of B(x2, y2)
            if (x1 > x2 || y1 < y2) {
                continue;
            }

            let valid = true;
            for (let k = i + 1; k < j; k++) {
                const [x, y] = points[k];

                if (x1 <= x && x <= x2 && y2 <= y && y <= y1) {
                    valid = false;
                    break;
                }
            }
            if (valid) count++; 
        }
    }

    return count;
};
