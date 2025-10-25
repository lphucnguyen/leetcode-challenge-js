/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
var nextLargerNodes = function(head) {
    const stack = [], results = [];
    let current = head, i = 0;

    while (current) {
        while (stack.length && stack.at(-1)[1] < current.val) {
            const [index] = stack.pop();

            results[index] = current.val;
        }

        stack.push([i++, current.val]);
        results.push(0);
        current = current.next;
    }

    return results;
};