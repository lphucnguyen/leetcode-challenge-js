/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// TC: O(n)
// SC: O(1)
// Solution: Stack
var removeNodes = function(head) {
    const stack = [head];

    while (head) {
        while (stack.length && stack.at(-1).val < head.val) {
            stack.pop();
        }

        stack.push(head);
        head = head.next;
    }

    for (let i = 1; i < stack.length; i++) {
        stack[i - 1].next = stack[i];
    }

    // console.log(stack);
    return stack[0];
};