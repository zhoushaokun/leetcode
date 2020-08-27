/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let faster = head;
    let slower = head;
    do {
        if(!slower.next) return false;
        slower = slower.next;
        if(!faster.next || !faster.next.next) return false;
        faster = faster.next.next;
    } while (faster !== slower);
    return true;
};
// @lc code=end

