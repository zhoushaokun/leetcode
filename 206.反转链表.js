/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    // 递归
    // 1、递归到链表尾部
    // 2、每次迭代返回的是翻转链表的尾部节点。
    if(!head) return head; 
    let reHead = {
        next: null,
    };
    //return reverseWhile(head);
    return reverRecurse(head, reHead);
    return reHead.next;
};

function reverRecurse(node) {
    let p = null;
    if(node.next){
        // p = reverRecurse(node.next, reHead);
        // node.next = null;
        // p.next = node;
        // return node;
        p = reverRecurse(node.next);
        node.next.next = node;
        node.next = null;
        return p;
    } else {
        // reHead.next = node;
        return node;
    }
}



function reverseWhile(head) {
    let p = head;
    let pC = null;
    let pPre = null;
    while (p) {
        pC = p.next;
        p.next = pPre;
        pPre = p;
        p = pC;
    }
    return pPre;
}
// @lc code=end

