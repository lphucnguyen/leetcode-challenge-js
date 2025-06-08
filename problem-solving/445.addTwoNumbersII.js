/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// TC: O(n)
// SC: O(n)
// Solution: Stack
// https://leetcode.com/problems/add-two-numbers-ii/solutions/5331825/video-stack-solution
var addTwoNumbers = function(l1, l2) {
    const stack1 = [], stack2 = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let dummyHead = null;

    // Check carry because [5] + [5] = [1,0], if don't check carry, the result is [0], carry = 1
    // So check carry is not 0 to run new ListNode
    while (stack1.length || stack2.length || carry) {
        const val1 = stack1.pop() || 0;
        const val2 = stack2.pop() || 0;

        const sum = val1 + val2 + carry
        carry = Math.floor(sum / 10);

        const newNode = new ListNode(sum % 10, dummyHead);
        dummyHead = newNode;
    }

    return dummyHead;
};