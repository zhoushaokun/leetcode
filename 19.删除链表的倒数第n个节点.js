/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p = head;
    let arr = [];
    let len = 0;

    while(p) {
        arr.push(p);
        p = p.next;
        len ++;
    }
    if(len === n) return head.next;
    arr[len - n - 1].next = arr[len - n].next;
    return head;
};
// @lc code=end

