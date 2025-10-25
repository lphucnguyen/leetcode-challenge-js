/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a, b) => {
        const distanceA = Math.sqrt(a[0]**2 + a[1]**2);
        const distanceB = Math.sqrt(b[0]**2 + b[1]**2);

        return distanceA - distanceB;
    });

    // console.log(points)
    return points.slice(0, k);
};