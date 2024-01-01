// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Solution: Using recursion
// - Add a dummy node before the head
// - Recursively traverse to the end of the list
// - When the end is reached, return 0
// - When the end is reached, start counting from 0
// - If the count is equal to n, remove the next node
// O(n) in time and space


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    head = new ListNode(-1, head);

    const removeFromEnd = (head, n) => {
        if (head.next === null) return 0;
        const fromEnd = removeFromEnd(head.next, n);

        if (fromEnd === n-1) {
            head.next = head.next.next;
        }

        return fromEnd + 1;
    }

    removeFromEnd(head, n);

    return head.next;
};