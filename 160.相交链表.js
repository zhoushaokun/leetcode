/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let pA = headA,
        pB = headB;
    while(pA !== pB){
        if(pA) {
            pA = pA.next;
        } else {
            pA = headB;
        }
        if(pB) {
            pB = pB.next;
        } else {
            pB = headA;
        }
    }
    return pA;
};
// @lc code=end

