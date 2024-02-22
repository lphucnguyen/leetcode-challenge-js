// Given the head of a sorted linked list,
// delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list.
// Return the linked list sorted as well.

// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [2,3]


// First, a dummy node is created with a value of 0 and it is set as the next node of the dummy node.
// This dummy node will be used to track the head of the list as it is modified. prev is set to dummy and curr is set to head.
// A while loop is then entered that will continue until curr is null.
// Inside the loop, there is another while loop that will continue until curr.next is null or curr.val is not equal to curr.next.val.
// This inner loop is used to move curr to the last occurrence of a value that is duplicated in the list.
// After the inner loop, there is an if statement that checks if prev.next is equal to curr.
// If it is, this means that curr was not a duplicate and prev should be advanced to curr.
// If prev.next is not equal to curr, this means that curr was a duplicate and prev.next should be set to curr.next to skip over the duplicates.
// Finally, curr is advanced to curr.next and the process repeats until curr is null. The modified list, with duplicates removed, is then returned as dummy.next.

// Solution: Two Pointers
// - Create a dummy node with a value of -1 and set it as the next node of the dummy node.
// - Set left as the dummy node and right as the next node of the dummy node.
// - Iterate through the list until right is null.
// - Inside the loop, iterate through the list until right.next is null or right.val is not equal to right.next.val.
// - After the inner loop, check if left.next is equal to right.
// - If it is, this means that right was not a duplicate and left should be advanced to right.
// - If left.next is not equal to right, this means that right was a duplicate and left.next should be set to right.next to skip over the duplicates.
// - Finally, right is advanced to right.next and the process repeats until right is null. The modified list, with duplicates removed, is then returned as dummy.next.
// Time complexity: O(n)
// Space complexity: O(1)

var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1, head);
    let left = dummy;
    let right = dummy.next;

    while (right) {
        // Check if there is a duplicate right = right.next
        while (right.next && right.val === right.next.val) right = right.next;

        // Check if between left and right don't have a duplicate
        // left = right, otherwise there is a duplicate left.next = right.next
        if (left.next === right) {
            left = right;
        } else {
            left.next = right.next;
        }

        // Iterate to end list
        right = right.next;
    }

    return dummy.next;
};