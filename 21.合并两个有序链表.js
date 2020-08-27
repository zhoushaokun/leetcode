/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    let head = {
        val: -1,
        next: null,
    };
    let pre = head;
    let p1 = l1;
    let p2 = l2;
    
    while (p1 && p2) {
        if(p1.val > p2.val){
            pre.next = p2;
            p2 = p2.next;
        } else {
            pre.next = p1;
            p1 = p1.next;
        }
        pre = pre.next;
    }

    if(p1) pre.next = p1;
    if(p2) pre.next = p2;

    return head.next;
};
// @lc code=end

