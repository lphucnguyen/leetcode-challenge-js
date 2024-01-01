/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0, null);
    const mergedList = head;

    while(list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }

        head = head.next;
    }

    head.next = list1 || list2;

    return mergedList.next;
};