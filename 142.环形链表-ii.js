/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
    // 先快慢指针判断是否存在环
    if(!head) return null;
    let pSlow = head;
    let pFast = head;
    do {
        if(!pSlow.next) return null; 
        if(!pFast.next || !pFast.next.next) return null;
        pSlow = pSlow.next;
        pFast = pFast.next.next;
    } while (pSlow !== pFast);
    // 存在环再从头遍历，直到相遇 
    pFast = null;
    let pret = head;
    while(pret !== pSlow) {
        pret = pret.next;
        pSlow = pSlow.next;
    }
    return pret;
};
// @lc code=end

