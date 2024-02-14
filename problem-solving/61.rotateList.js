// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Solution: Two Pointers
// - The code first checks if the linked list is empty or has only one node, in which case it returns the head of the list as the result.
// - Then, it finds the last node of the linked list and the length of the linked list.
// - The last node is found by iterating through the linked list and updating the tail variable until there is no next node.
// - Then, the code creates a circular linked list by connecting the tail node to the head node.
// - Next, the code calculates the number of steps to rotate the linked list to the right. This is done by subtracting k modulo the length of the linked list from the length of the linked list.
// - Finally, the code breaks the circular linked list back into a linear linked list by setting the next node of the last node to null.
// - Returning the head node of the rotated linked list
// Time complexity: O(n)
// Space complexity: O(1)


var rotateRight = function(head, k) {
    // The code first checks if the linked list is empty or has only one node, in which case it returns the head of the list as the result.
    if (!head || !head.next) return head;

    // Then, it finds the last node of the linked list and the length of the linked list.
    // The last node is found by iterating through the linked list and updating the tail variable until there is no next node.
    let last = head;
    let count = 1;
    while (last.next !== null) {
        last = last.next;
        count++;
    }

    // Then, the code creates a circular linked list by connecting the tail node to the head node.
    last.next = head;
    // Next, the code calculates the number of steps to rotate the linked list to the right. This is done by subtracting k modulo the length of the linked list from the length of the linked list.
    k = count - k % count;

    // Finally, the code breaks the circular linked list back into a linear linked list by setting the next node of the last node to null.
    for (let i = 0; i < k; i++) {
        last = last.next;
        head = last.next;
    }
    last.next = null;

    // Returning the head node of the rotated linked list
    return head;
};