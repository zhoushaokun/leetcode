/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (!head || !head.next) return head;
    let p = head;
    let insertNode = null;
    let s = null;

    while (p.next) {
        if(head.val > p.next.val) {
            insertNode = p.next;
            p.next = p.next.next;
            insertNode.next = head;
            head = insertNode;
        } else {
            s = head;
            while (s.next !== p.next) {
                if (s.next.val <= p.next.val) {
                    s = s.next;
                } else {
                    insertNode = p.next;
                    p.next = p.next.next;
                    insertNode.next = s.next;
                    s.next = insertNode;
                    break;
                }
            }
        }
        if(!insertNode) {
            p = p.next;
        } else {
            insertNode = null;
        }
    }
    return head;
};
// @lc code=end

