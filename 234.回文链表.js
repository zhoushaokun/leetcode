/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
var isPalindrome = function(head) {
    if (!head) return true;
    const preHead = {
        next: head,
    };
    let slow = preHead,
        fast = preHead;
    while (fast && fast.next) {
        slow.next.pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast) fast = slow.next;
    else fast = slow;
    while (slow !== preHead) {
        if (slow.val !== fast.val) return false;
        slow = slow.pre;
        fast = fast.next;
    }
    return true;
};
// @lc code=end

