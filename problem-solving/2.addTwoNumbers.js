// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Solution: Recursion
// - create a function calculate (l1, l2, carry)
//   - if l1 and l2 and carry are all null, return null
//   - let val1 be l1?.val || 0
//   - let val2 be l2?.val || 0
//   - let sum be val1 + val2 + carry
//   - let nextNode be calculate(l1?.next, l2?.next, Math.floor(sum/10))
//   - return new ListNode(sum%10, nextNode)
// - return calculate(l1, l2, 0)
// Time Complexity: O(n)
// Space Complexity: O(n)

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
var addTwoNumbers = function(l1, l2) {
    const calculate = (l1, l2, carry) => {
        if (!l1 && !l2 && carry === 0) return null;
        const val1 = l1?.val || 0;
        const val2 = l2?.val || 0;
        const sum = val1 + val2 + carry;
        const nextNode = calculate(l1?.next, l2?.next, Math.floor(sum/10));

        return new ListNode(sum%10, nextNode);
    };

    return calculate(l1, l2, 0);
};