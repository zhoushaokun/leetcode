/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
    if (!head || !head.next) return head;
    head = insertSort(head);
    let p = head;
    while (p.next) {
        p.next = insertSort(p.next);
        p = p.next;
    }
    return head;
};

function insertSort(head) {
    if(!head || !head.next) return head;
    let headNew = {
        val: head.val,
        next: head,
    };
    let pPre = headNew;

    p = head;
    while(p.next){
        if(p.next.val < pPre.next.val) {
           pPre = p;
        }
        p = p.next;
    }
    if (pPre === headNew) return head;
    headNew = pPre.next;
    pPre.next = pPre.next.next;
    headNew.next = head;
    head = headNew;
    return head;
}

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// function init(arr) {
//     let head = new ListNode(arr[0]);
//     p = head;
//     for (let i = 1; i < arr.length; i++) {
//         p.next = new ListNode(arr[i]);
//         p = p.next;
//     }
//     p = null;
//     return head;
// }

// function end(head) {
//     let p = head;
//     const res = [];
//     while(p){
//         res.push(p.val);
//         p = p.next;
//     }
//     return res;
// }

// const list = init([-1, 5, 3, 4, 0]);
// const res = sortList(list);
// console.log('res', end(res))
// @lc code=end

