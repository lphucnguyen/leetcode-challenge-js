/**
 * @param {number[][]} dimensions
 * @return {number}
 */
// TC: O(n)
// SC: O(1)
// Solution: Array
var areaOfMaxDiagonal = function(dimensions) {
    let diagonal = 0, maxArea = 0;

    for (const [l, w] of dimensions) {
        if (l * l + w * w > diagonal) {
            diagonal = l * l + w * w;
            maxArea = l * w;
        } else if (l * l + w * w === diagonal) {
            maxArea = Math.max(maxArea, l * w);
        }
    }

    return maxArea;
};