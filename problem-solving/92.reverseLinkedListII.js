// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

// Solution: Stack
// - Create a variable i and set it to 1.
// - Create a variable leftNode and set it to head.
// - Create a variable rightNode and set it to head.
// - Create a stack array.
// - Iterate through the list until rightNode is null.
// - If i is greater than or equal to left and i is less than or equal to right, push rightNode.val to the stack.
// - If i is equal to left, set leftNode to rightNode.
// - If i is equal to right, break the loop.
// - Set rightNode to rightNode.next and increment i by 1.
// - Iterate through the list from left to right and pop the stack and set the value to leftNode.val.
// - Return head.
// - Time complexity: O(n)
// - Space complexity: O(n)

var reverseBetween = function(head, left, right) {
    let i = 1;
    let leftNode = head;
    let rightNode = head;

    const stack = [];

    while (rightNode !== null) {
        if (i >= left && i <= right) stack.push(rightNode.val);

        if (i === left) {
            leftNode = rightNode;
        }
        else if (i === right) break;

        rightNode = rightNode.next;
        i++;
    }

    for (let i = 0; i < right - left + 1; i++) {
        leftNode.val = stack.pop();
        leftNode = leftNode.next;
    }

    return head;
};