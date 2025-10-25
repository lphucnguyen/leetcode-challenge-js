/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let node = head, list = [];

    while (node) {
        list.push(node.val);
        node = node.next;
    }

    let left = 0, right = list.length - 1;
    while (left <= right && list[left] === list[right]) {
        left++;
        right--;
    }

    return left >= right;
};