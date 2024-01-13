// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.


// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Container: [8,6,2,5,4,8,3,7] ==> height = min(8,7) = 7, width = 8 - 1 = 7 => 7 * 7 = 49
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1


// Solution 1: Two pointers
// - Create a variable called maxArea and set it to 0
// - Create a variable called left and set it to 0
// - Create a variable called right and set it to height.length - 1
// - Create a while loop where left is less than right
//   - Find the minimum height between the two heights
//   - Find the width of the container
//   - Find the max area
//   - If the left height is less than the right height
//     - Increment left by 1
//   - Else
//     - Decrement right by 1
// - Return maxArea
// Time Complexity: O(n)
// Space Complexity: O(1)


var maxArea = function(height) {
    let right = height.length - 1;
    let left = 0;
    let maxArea = 0;

    while(left <  right) {
        // Find the minimum height between the two heights
        const heightContainer = Math.min(height[right], height[left]);
        // Find the width of the container
        const wideContainer = right - left;

        // Find the max area
        maxArea = Math.max(maxArea, wideContainer * heightContainer);

        if (height[left] < height[right]) {
            left++;
        }else {
            right--;
        }
    }

    return maxArea;
};