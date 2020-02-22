/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
/* 
    1、p.next 指向的节点 val 与 p 比较如果相同则删去，p保持不变
    2、如果不同，p 指向下一个节点
    3、直至 p.next 为 null
*/
var deleteDuplicates = function(head) {
    if (!head) return head;
    let p = {
        next:head,
        val: head.val - 1,
    };
    while(p.next) {
        if(p.next.val === p.val){
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};
// @lc code=end

